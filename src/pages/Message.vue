<template>
  <div id="message" @click="MenuOutsideClick">
    <theader1 :totalnum="totalnumGetter"></theader1>
    <div style="padding-top: 45px;">
      <div v-for="item in msgListGetter">
        <!--v-for start 单个-->
        <div class="message-list" @click="tochat(item.id,item.name)" v-if="item.type==='private'"> <!--ul-->
          <div class="list-row line-bottom">
            <div class="item-hide"><!--li-->

              <div class="list-info" v-swiper>
                <div class="header-box">
                  <span class="weui-badge" v-if="item.unread">{{item.unread}}</span>
                  <div class="header multi-header">
                    <img :src="item.avator">
                  </div>
                </div>
                <div style="display:  flex;flex-direction:  row;">
                  <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item.name}}</h4>
                    <p class="weui_media_desc">{{item.message}}</p>
                  </div>
                  <div class="desc-time">
                    <div class="fmt">{{item.time}}</div>
                    <!--<div class="desc-mute iconfont icon-mute"></div>-->
                  </div>
                </div>
              </div>

            </div>
            <div class="operate-box">
              <div class="operate-read" >标为已读</div>
              <div class="operate-del" >删除</div>
            </div>
          </div>
        </div>
        <!--v-for end-->
        <!--v-for start 群-->
        <div class="message-list" v-else-if="item.type==='group'" > <!--ul-->
          <div class="list-row line-bottom">
            <div class="item-hide"><!--li-->

              <div class="list-info" v-swiper>
                <div class="header-box">
                  <span class="weui-badge weui-badge_dot"></span>
                  <div class="header multi-header">
                    <img :src="item.group_avator">
                    <!--<img src="../assets/images/header/header01.png">-->
                  </div>
                </div>
                <div style="display:  flex;flex-direction:  row;">
                  <div class="weui_media_bd">
                    <h4 class="weui_media_title">{{item.group_name}}</h4>
                    <p class="weui_media_desc">{{item.message}}</p>
                  </div>
                  <div class="desc-time">
                    <div class="fmt">{{item.time}}</div>
                    <!--<div class="desc-mute iconfont icon-mute"></div>-->
                  </div>
                </div>
              </div>

            </div>
            <div class="operate-box">
              <div class="operate-read" >标为已读</div>
              <div class="operate-del" >删除</div>
            </div>
          </div>
        </div>
        <!--v-for end-->
      </div>
    </div>


    <tfooter :path="path" :totalnum="totalnumGetter"></tfooter>

  </div>
</template>


<style lang="scss" scoped>
  #message{
    padding-bottom: 49px;
    .weui-badge{
      position: absolute;
      right: -2px;
      top: -5px;
    }
    .message-list{
      position: relative;
      overflow-x: hidden;
      z-index: 1;
      .list-row{
        height: 64px;
        position: relative;
        overflow: hidden;
        &.item-hide{
          transition: 0.3s;
          height: 0px;
          &:after{
            content: "";
            position: absolute;
            z-index: 2;
            top: 1px;
            bottom: 1px;
            width: 100%;
            background: rgba(0,0,0,0.3);
          }
        }
        &:last-child:after{
          content: "";
          position: absolute;
          width: 200%;
          left: 0;
          z-index: 10;
          left: 8px;
          bottom: 0;
          transform: scale(.5);
          transform-origin: 0 0;
          -webkit-transform: scale(.5);
          -webkit-transform-origin: 0 0;
          background-color: #b7b7b7;
          height: 1px;
        }
        .list-info {
          position: relative;
          z-index: 2;
          left: 0;
          width: 100%;
          height: 64px;
          padding: 8px;
          background-color: #fff;
          .header-box {
            position: relative;
            float: left;
            width: 48px;
            height: 48px;
            margin-right: 10px;
            .header {
              height: 100%;
              border-radius: 5px;
              display: flex;
              display: -webkit-flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              overflow: hidden;
              background: #dddbdb;
              img {
                width: 10%;
                height: auto;
                flex-grow: 2;
                border: 0;
              }
              &.multi-header {
                img {
                  margin: 1px;
                }
              }
            }
          }

            .weui_media_bd{
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              min-width: 0;
              .weui_media_title{
                font-weight: 400;
                font-size: 17px;
                width: auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                word-wrap: break-word;
                word-break: break-all;
              }.weui_media_desc{
                 color: #999;
                 font-size: 13px;
                 line-height: 1.2;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 display: -webkit-box;
                 -webkit-box-orient: vertical;
                 -webkit-line-clamp: 1;
               }

          }.desc-time{
                         .fmt{
                           font-size: 13px;
                           color: #999999;
                         }
                         .desc-mute{
                           color: #999999;
                           margin-left: 10px;
                         }
                       }

        }
        .operate-box {
          position: absolute;
          z-index: 1;
          height: 100%;
          right: 0;
          top: 0;
          display: flex;
          &>div {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #c7c7cc;
            color: #fff;
            font-size: 18px;
            padding: 0 12px;
          }
          .operate-del {
            background-color: #ff3b30;
          }
        }
      }
    }
  }




</style>

<script>
  import  ChatItem from '../components/ChatItem.vue'
  import Theader1 from '../components/Header1.vue'
  import Tfooter from '../components/Footer.vue';
  import  axios from 'axios'
  import {mapGetters} from 'vuex'
  export  default {
    components: {Tfooter,Theader1},
    data(){
      return{
        path:'',
        MsgList:[],
        frist:true,
    }
    },
    computed:{
      ...mapGetters([
        'totalnumGetter',
        'msgListGetter'
      ])
    },
    methods:{
      MenuOutsideClick(e){

//       console.log(e.target.className);
       if(e.target.className === 'iconfont icon-tips-jia'){

        $('#menu').removeClass("tips-close");
        $('#menu').attr({'class':'tips-open tips-menu'});

       }else{
//         console.log(123)
         $('#menu').removeClass("tips-open");
         $('#menu').attr({'class':'tips-close tips-menu'});

       }
      },
      getMsgBySocket(){
        socket.removeAllListeners('getPrivateMsg');
        socket.on('getPrivateMsg', (data) => {
          console.log('首页获取私聊消息', data);
          data.type = 'private'
          this.$store.commit('updateListMutation', data)
        })
      },
      //消息首页列表
      getMsg(){
        axios.get('/api/t1/message').then(res=>{
          if(res.data.success){
            console.log('message',res.data.data)
            const groupList = res.data.data.groupList;
            const privateList = res.data.data.privateList;
            if(groupList.length>0 && privateList.length>0){
              privateList.forEach(element =>{
                element.type = "private";
//              element.time = element.time ? toNomalTime(element.time) : toNomalTime(element.be_friend_time);
                element.message = element.message.split(':')[1]
                element.id = element.other_user_id;
              })
              groupList.forEach(element=>{
                element.type = "group";
//              element.time = element.time ? toNomalTime(element.time) : toNomalTime(element.be_friend_time);
                element.id = element.group_id;
              })
            }
            const allMsgList = groupList.concat(privateList);
            console.log(allMsgList);
            allMsgList.sort((a, b) => {
              return b.time - a.time;
            });
            this.MsgList = allMsgList;
          }
        });
      },
      tochat(chatId,username){
        this.$router.push({path:'chat',query: {user_id: chatId,username:username }})
      }
    },
    created(){
      if(this.frist){
        this.$store.dispatch('msgListAction')
//        this.$store.commit('firstLoadMutation', false)
        this.frist= false;
      }
      this.getMsgBySocket();
      this.path = this.$router.history.current.path
    },
    directives:{
        swiper:{
          bind:function (element,binding) {
            var isTouchMove, startTx, startTy
            element.addEventListener('touchstart',function (e) {
              console.log(e);
              var touches = e.touches[0]
              startTx = touches.clientX
              startTy = touches.clientY
              isTouchMove = false
            },false);
            element.addEventListener('touchmove',function (e) {
              var touches = e.changedTouches[0],
                  endTx = touches.clientX,
                  endTy = touches.clientY,
                  distanceX = startTy -endTx,
                  distanceY = startTy -endTy;
                  if(distanceX<0){//右滑
                    if(Math.abs(distanceX)>=Math.abs(distanceY)){
                      if(Math.abs(distanceY)>20){
                        element.style.transition  =  "0.3s"
                        element.style.marginLeft  = 0 +"px";
                      }
                    }
                  }else { //左滑
                    if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                      if (distanceX < 156 && distanceX > 20) {
                        e.preventDefault()
                        element.style.transition = "0s"
                        element.style.marginLeft = -distanceX + "px"
                        isTouchMove = true
                      }
                    }
                  }
            },false)
            element.addEventListener('touchend',function (e) {
                    if(!isTouchMove){
                      return;
                    }
                    var touches = e.changedTouches[0],
                        endTx   = touches.clientX,
                        endTy   = touches.clientY,
                        distanceX = startTx - endTx,
                        distanceY = startTy - endTy,
                        isSwipe = false
              if (Math.abs(distanceX)>=Math.abs(distanceY)){
                      if(distanceX<0){
                        return;
                      }
                      if(Math.abs(distanceX)<60){
                        isSwipe = true
                        element.style.transition = "0.3s"
                        element.style.marginLeft = 0 + "px"
                      }else {
                        element.style.transition = "0.3s"
                        element.style.marginLeft = "-156px"
                      }
              }

            },false)
          }
        }
      }
  }
</script>
