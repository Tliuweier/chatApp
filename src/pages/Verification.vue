<template>

  <div id="verification">
    <theader1 :path="path" v-on:toadd="toaddfriend"></theader1>
    <div style="margin-top: 70px;">
      <div class="weui-panel">
        <div class="weui-panel__bd">
          <span style="color:#999999;font-size: 14px;margin: 10px 0 10px 10px;">你需要发送验证申请，等对方通过</span>
        </div>
        <div class="weui-panel__bd">
          <div style="margin: 10px 0 10px 10px; "><input class="weui-input" type="text" style="font-size: 18px;color: black;" v-model="contents" /></div>
        </div>
      </div>
      <div class="weui-panel">
        <div class="weui-panel__bd">
          <span style="color:#999999;font-size: 14px;margin: 10px 0 10px 10px;">为朋友设置备注</span>
        </div>
        <div class="weui-panel__bd">
          <div style="margin: 10px 0 10px 10px; "><input class="weui-input" type="text" style="font-size: 16px;color: #999;" v-model="nickname" /></div>
        </div>
      </div>
    </div>

  </div>
</template>


<style>


</style>

<script>

  import Theader1 from '../components/Header1.vue'
  import axios from "axios"
  export  default {
    data(){
      return{
        contents:'',
        nickname:'',
        fromUserInfo:{}
      }
    },
    components:{
      Theader1
    },
    created(){
      this.path = this.$router.history.current.path
      this.contents = '我是'+JSON.parse(localStorage.getItem('userInfo')).name;
      this.nickname = JSON.parse(localStorage.getItem('userInfo')).name
    },
    methods:{
      toaddfriend(){
        socket.emit('sendRequest',{
          from_user: this.fromUserInfo.user_id,
          to_user: this.$route.query.other_user_id, //对方id
          name: this.fromUserInfo.name,
          avator: this.fromUserInfo.avator,
          sex: this.fromUserInfo.sex,
          content: this.contents,
          time: Date.parse(new Date()) / 1000 //时间
        })
        axios.post('/api/t1/insert_newfriends',{
          to_user:this.$route.query.other_user_id,
          content:this.contents,
          time:Date.parse(new Date())/1000,
          status:0
        }).then(res =>{
          if(res.data.success){
            this.$router.push('/message');
          }
        }).catch(err =>{
          console.log(err)
        })

      }
    },
    mounted(){
      this.fromUserInfo = JSON.parse(localStorage.getItem("userInfo"))
    }
  }
</script>
