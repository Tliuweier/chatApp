import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {
  toNomalTime
} from "../utils/transformTime";
import {
  setTime
} from "../utils/time";
Vue.use(Vuex);

const store = new Vuex.Store({
      state:{
          totalnum:0,
          msgList:[],
          allContacts:[],
          newFriend:[]
      },
      getters:{
        msgListGetter:state=>state.msgList,
        totalnumGetter:state=>state.totalnum,
        allContactsGetter:state=>state.allContacts,
        contactsInitialList:state=>{
          var initialList = [],
            allContacts = state.allContacts,
            max = allContacts.length
          for (var i = 0; i < max; i++) {
            if (initialList.indexOf(allContacts[i].initial.toUpperCase()) == -1) {
              initialList.push(allContacts[i].initial.toUpperCase())
            }
          }
          return initialList.sort()
        },
        contactsList: (state, getters) => {
          var contactsList = {},
            allContacts = state.allContacts,
            max = allContacts.length;
          for (var i = 0; i < getters.contactsInitialList.length; i++) {
            var protoTypeName = getters.contactsInitialList[i]
            contactsList[protoTypeName] = []
            for (var j = 0; j < max; j++) {
              if (allContacts[j].initial.toUpperCase() === protoTypeName) {
                contactsList[protoTypeName].push(allContacts[j])
              }
            }
          }
          return contactsList
        },
        newFriendGetter:state=>state.newFriend
      },
  mutations:{
        newFriendsMutation(state,data){
          state.newFriend = data
        },
        resetUnredMutation(state,id){
            state.msgList.forEach(ele=>{
              if(ele.id == id){
                if(ele.unread == null){
                  return
                }
                state.totalnum -= ele.unread
                ele.unread = null ;

              }
            })
        },
        msgListMutations(state,data){
          state.msgList = data;
        },
        totalnumMutations(state,data){
          state.totalnum = data;
        },
        updateListMutation(state,data){
          let unread = 0;
          if(data.action ==="push"){
            console.log('push', data)
            state.msgList.push(data);
            console.log('push', state.msgList)
            return
          }
          if(data.type ==="private"){
            //判断是哪个人  对方发的
            state.msgList.forEach(ele =>{
              if(ele.other_user_id == data.from_user){
                ele.message = data.name + ' : ' + data.message;
                ele.time = setTime(data.time);
                ele.name = data.name;
                ele.avator = data.avator;
                //如果是当前的聊天，没必要加未读标识了
                if(data.chatOfNow) return
                if (!ele.unread){
                  ele.unread = unread + 1;
                  state.totalnum =ele.unread;
                }else{
                  ele.unread += 1;
                  state.totalnum =ele.unread;
                }
              }else if(ele.other_user_id == data.to_user){//自己发的
                ele.message = data.name + ' : ' + data.message;
                ele.time = data.time;
                ele.name = data.name;
                ele.avator = data.avator;

              }
            })
          }
        },
        allContactsMutation(state,data){
          state.allContacts=data
        }
      },
      actions:{
        async msgListAction({commit}){
          let unread =0
          const res = await axios.get("/api/t1/message");
          console.log("res",res);
          if (res.data.success) {
            const groupList = res.data.data.groupList;
            const privateList = res.data.data.privateList;
            groupList.forEach(element => {
              element.type = "group";
              element.time = element.time ? setTime(element.time) : setTime(element.creater_time);
              element.id = element.group_id;
            });
            privateList.forEach(element => {
              element.type = "private";
               element.time = element.time ? setTime(element.time) : setTime(element.be_friend_time);
              element.id = element.other_user_id;


              // element.unread = 0;
            });
            const allMsgList = groupList.concat(privateList);
            allMsgList.sort((a, b) => {
              return b.time - a.time;
            });
            commit("totalnumMutations",unread);
            commit("msgListMutations", allMsgList);
          }
        },
        async allContactsAction({commit}){
          const res = await axios.get('/api/t1/find_contact');
          console.log(res)
          if(res.data.success){
            commit("allContactsMutation",res.data.data.allcontact)
          }

        },
        async newFriendAction({commit}){
          const res = await axios.get("/api/t1/get_newfriends");
          commit("newFriendsMutation",res.data.data.newFriends)
        }
      }
});
export default store;
