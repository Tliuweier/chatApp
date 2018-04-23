<template>
  <div class="input-msg">
    <textarea v-model="inputMsg" @keydown.enter.prevent="sendMessage" ref="message"></textarea>
    <p class="btn" :class="{'enable':inputMsg!=''}" @click="sendMessage">{{btnInfo}}</p>
  </div>
</template>


<style>


</style>

<script>
  import axios from "axios"
  export default {
    data(){
      return{
          btnInfo:'发送',
          inputMsg: '',
          toUserInfo:{
            toUserInfo: { //被私聊者
              to_user: '',   //被私聊者的ID
              avator: '',
              sex: '',
              place: '',
              status: ''
            },
            isMyFriend: false, //他是否是我的好友
            isHisFriend: false, //我是否是他的好友
            fromUserInfo: {}, //用户自己
          }
      }
    },
    methods:{
        sendMessage(){
          if (this.inputMsg.trim() == '') return
          this.sendMsgBySocket();
          //this.saveMsgByDB();
        },
        sendMsgBySocket(){
          this.toUserInfo.to_user = this.fromUserInfo.user_id == 16? '15':'16';
          const data = {
            from_user: this.fromUserInfo.user_id, //自己的id
            to_user: this.toUserInfo.to_user, //对方id
            name: this.fromUserInfo.name, //自己的昵称
            avator: this.fromUserInfo.avator, //自己的头像
            message: this.inputMsg, //消息内容
            type: 'private',
            status: '1', //是否在线 0为不在线 1为在线
            time: Date.parse(new Date()) / 1000 //时间
          };
          socket.emit('sendPrivateMsg', data)

        },
        saveMsgByDB(){
          const data = {
            from_user: this.fromUserInfo.user_id, //自己的id
            to_user: this.toUserInfo.to_user, //对方的id
            name: this.fromUserInfo.name, //自己的昵称
            avator: this.fromUserInfo.avator, //自己的头像
            message: this.inputMsg, //消息内容
            status: '1', //是否在线 0为不在线 1为在线
            time: Date.parse(new Date()) / 1000 //时间
          }
          axios.post('/api/v1/private_save_msg', data)
            .then(res => {
              this.inputMsg = '';
              // 存此条私聊信息到本地
              data.time = toNomalTime(data.time)
              console.log('saveMsgByDBdata', data)
              //this.privateDetail.push(data);
            })
        },
        getMsgBySocket(){
          socket.on('getPrivateMsg',(data)=>{
            console.log('聊天内获取私聊消息', data);
          })
        }
    },
    created(){
      this.fromUserInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.getMsgBySocket();
    }
  }
</script>
