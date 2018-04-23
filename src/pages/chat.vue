<template>
  <div class="wrapper">
    <theader1 :path="path" :name="username" :totalnum="totalnumGetter"></theader1>
    <ul>
      <li v-for="item in privateDetail">
        <div class="chat-item">
          <div  class="mychat" v-if="meInfo.user_id === item.from_user">
            <!-- <a :href="href"><img :src="img" alt="" class="img"></a> -->
            <img :src="item.avator" alt="" class="img">
            <div class="nt"><span >{{item.name}}</span><span >{{item.time}}</span></div>
            <div class="msg">{{item.message}}</div>

          </div>
          <div  class="otherchat" v-else>
            <!-- <a :href="href" ><img :src="img" alt="" class="img"></a> -->
            <img :src="item.avator" alt="" class="img">
            <div class="nt"><span >{{item.name}}</span><span>{{item.time}}</span></div>
            <div class="msg">{{item.message}}</div>
          </div>


        </div>
      </li>

    </ul>


    <!--发送内容-->
   <div class="footer">
      <div class="footer_nav">
        <span class="iconfont icon-dialogue-voice"></span>
        <div class="chat-way">
          <input type="text" class="chat-txt" v-model="sendMsg"/>
        </div>

        <div style="display: block;margin: 3px;" v-if="state">
          <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" @click="sendMessage">发送</a>
        </div>
        <div v-else>
          <span class="expression iconfont icon-dialogue-smile"></span>
          <span class="more iconfont icon-dialogue-jia"></span>
        </div>

      </div>
   </div>



  </div>

</template>


<style lang="scss" scoped>
  .wrapper{
    padding-top: 0px;
    z-index: 1;
    position: relative;
    bottom:0;
    ul {
      margin-top: 40px;
      width: 100%;
      padding-bottom: 60px;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;

      li {
        list-style-type: none;
      }
    }
  }
  .chat-item {
    width: 100%;
    margin: 50px 0;
    .otherchat {
      width: 100%;
      position: relative;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .nt {
        font-size: 13px;
        left: 75px;
        top: -30px;
        position: absolute;
        color: #686868;
        span {
          padding-right: 10px;
        }
        span:nth-child(2) {
          font-size: 13px;
        }
      }
      .msg {
        float: left;
        max-width: 60%;
        // margin-top: 0.2rem;
        margin-left: 75px;
        padding: 8px;
        border-radius: 0.1*160px;
        font-size: 13px;
        line-height: 20px;
        background-color: #fff;
      }
    }
    .mychat {
      width: 100%;
      position: relative;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        right: 0;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      .nt {
        font-size: 13px;
        right:75px;
        top: -30px;
        position: absolute;
        color: #686868;
        span {
          padding-left: 10px;
        }
        span:nth-child(1) {
          font-size: 13px;
        }
      }
      .msg {
        float: right;
        max-width: 60%;
        margin-right: 75px;
        padding: 8px;
        border-radius: 0.1*160px;
        font-size: 13px;
        line-height: 20px;
        background-color: #9EEA6A;
        color: #000000;
      }
    }
  }

  @import "../assets/css/lib/chat";
</style>

<script>
  import Theader1 from '../components/Header1.vue'
  import {mapGetters} from 'vuex'
  import axios from "axios"
  import {
    toNomalTime
  } from "../utils/transformTime";
  export  default {
    components:{
      Theader1
    },
    computed:{
      ...mapGetters([
          'totalnumGetter'
      ])
    },
    data(){
      return{
        sendMsg:'',
        state:false,
        toUserInfo:{},
        meInfo:{},
        privateDetail:[]
      }
    },
    methods:{
      // 消息置底
      refresh() {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight + 10000)
        }, 0)
      },
      //获取数据库的消息
      getPrivateMsg(){
        var to_user = this.$route.query.user_id;
        axios.get('/api/t1/private_detail',{
          params:{
            to_user:to_user
          }
        }).then(res=>{
          console.log('private',res)
          if(res.data.success){
            this.privateDetail = res.data.data.privateDetail;
            if (this.privateDetail.length == 0) return;
            this.privateDetail.forEach(element=>{
              element.time = toNomalTime(element.time)
              element.message = element.message.split(':')[1]
            })
          }
        })
      },
      findUser(){
        var user_id = this.$route.query.user_id;
        axios.get("/api/t1/user_info",{
          params:{
            user_id:user_id
          }
        }).then(res=>{
          if(res.data.success){
            this.toUserInfo = res.data.data.userInfo[0]
          }
        })
      },
      //发送消息
      sendMessage(){
        if(this.sendMsg.trim()=='')return
        this.sendMsgBySocket();
        this.saveMsgByDB();
      },
      //用socket发消息
      sendMsgBySocket(){
        const data = {
            from_user:this.meInfo.user_id,//自己id
            to_user:this.toUserInfo.user_id,//对方id
            name: this.meInfo.name, //自己的昵称
            avator: this.meInfo.avator, //自己的头像
            message: this.sendMsg, //消息内容
            type: 'private',
            status: '1', //是否在线 0为不在线 1为在线
            time: Date.parse(new Date()) / 1000 //时间
        }
        socket.emit('sendPrivateMsg',data)
        //更新首页消息列表
        this.$store.commit('updateListMutation', data)
      },
      //用数据库存消息
      saveMsgByDB(){
        const data = {
          from_user:this.meInfo.user_id,//自己id
          to_user:this.toUserInfo.user_id,//对方id
          name: this.meInfo.name, //自己的昵称
          avator: this.meInfo.avator, //自己的头像
          message: this.sendMsg, //消息内容
          type: 'private',
          status: '1', //是否在线 0为不在线 1为在线
          time: Date.parse(new Date()) / 1000 //时间
        }
        axios.post('/api/t1/priavte_save_msg',data)
          .then(res=>{
            this.sendMsg = '';
            data.time = toNomalTime(data.time)
            console.log('saveMsgByDBdata',data)
            //添加data
            this.privateDetail.push(data);
          })
      },
      //获取socket消息
      getMsgBySocket(){
        socket.removeAllListeners('getPrivateMsg');
        socket.on('getPrivateMsg',(data)=>{
          console.log('聊天内获取私聊消息',data)
          if(data.from_user != this.toUserInfo.to_user){
            //soket信息不是来自当前聊天者 vuex添加此条信息 有未读提示
            data.chatofNow = false;
            this.$store.commit('updateListMutation',data);
          }else{
            //soket信息来自当前聊天者 vuex添加此条信息 没未读提示
            data.chatOfNow = true;
            this.$store.commit('updateListMutation',data);
          }
          data.time = toNomalTime(data.time)
          this.privateDetail.push(data);
        })
      },
      resetUnred(){
        var user_id = this.$route.query.user_id;
        this.$store.commit('resetUnredMutation', user_id)
      }
    },
    created(){
      this.username = this.$route.query.username;
      console.log(this.$route.query);
      this.path = this.$router.history.current.path
      this.findUser();
      this.meInfo  = JSON.parse(localStorage.getItem('userInfo'));
      this.getMsgBySocket();
      this.getPrivateMsg();
      this.resetUnred();
    },
    watch:{
      sendMsg:function (newSendMsg,oldSendMsg) {
        if(newSendMsg!=''){
          this.state =true;
        }else{
          this.state = false
        }
      },
      privateDetail:function () {
        this.refresh();
      }
    }
  }
</script>
