<template>
  <div id="addfriend">
    <theader1 :path="path"></theader1>

    <div class="search-line" style="margin-top: 50px">
      <span class="iconfont icon-search"></span>
      <input type="text" placeholder="微信号/手机号" v-model="account">
    </div>



    <p v-if="!state" style="text-align: center;margin: 15px;color: #999;font-size: 13px;">
      <span>我的微信号：13800138000</span>
      <img src="/static/images/chat-info-qr.png" class="_align-middle" style="vertical-align: middle; width: 24px;">
    </p>


    <div class="weui-cells" v-if="state">
      <div class="weui-cell" @click="finduser">
        <div class="weui-cell__bd">
          <div style="display: flex;flex-direction: row;">
            <span class="iconfont  icon-chat-friends" style="margin: 10px;font-size: 30px;"></span>
            <p style="padding-top: 20px">找人 :  {{account}}</p>
          </div>

        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div style="display: flex;flex-direction: row;">
            <span class="iconfont  icon-chat-group"  style="margin: 10px;font-size: 30px;"></span>
            <p style="padding-top:20px;">找群 :  {{account}}</p>
          </div>

        </div>
      </div>
    </div>



    <div class="weui-cells" v-else>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="/static/images/contact_add-friend-reda.png" style="width: 40px;display: block">

        </div>
        <div class="weui-cell__bd">
          <p>雷达加朋友</p>
          <p style="font-size: 13px;color: #888888;">添加身边的朋友</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="/static/images/contact_top-addgroup.png" style="width: 40px;display: block">

        </div>
        <div class="weui-cell__bd">
          <p>面对面建群</p>
          <p style="font-size: 13px;color: #888888;">与身边的朋友进入同一个群聊</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="/static/images/contact_add-friend-scanqr.png" style="width: 40px;display: block">

        </div>
        <div class="weui-cell__bd">
          <p>扫一扫</p>
          <p style="font-size: 13px;color: #888888;">扫描二维码名片</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="/static/images/contact_top-friend-notify.png" style="width: 40px;display: block">

        </div>
        <div class="weui-cell__bd">
          <p>手机联系人</p>
          <p style="font-size: 13px;color: #888888;">添加或邀请通讯录中的朋友</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img src="/static/images/contact_add-friend-offical.png" style="width: 40px;display: block">

        </div>
        <div class="weui-cell__bd">
          <p>公众号</p>
          <p style="font-size: 13px;color: #888888;">获取更多资讯和服务</p>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
 #addfriend{
   .search-line{
     position: relative;
     height: 50px;
     padding-left: 30px;
     padding-top: 5px;
     padding-bottom: 5px;
     background-color: #fff;
     border-top: 1px solid #d9d9d9;
     border-bottom: 1px solid #d9d9d9;
     margin-top: 20px;
     span{
       color: #40b938;
     }
     input{
       width: calc(100% - 30px);
       font-size: 16px;
       height: 100%;
       border: 0;
       outline: none;
       vertical-align: middle;
     }
   }
   .weui-cell{
     height: 60px;

   }

 }

</style>

<script>
  import Theader1 from '../components/Header1.vue'
  import axios from "axios"
  export  default {
    data(){
      return{
        account:'',
        state:false
      }
    },
    components:{
      Theader1
    },
    created(){
      this.path = this.$router.history.current.path
    },
    watch:{
      account:function (newAccount,oldAccount) {
        if(newAccount!=''){
          this.state =true;
        }else{
          this.state = false
        }

      }
    },methods:{
      finduser(){
        this.$router.push({ path: 'userdetailed', query: { account: this.account }})
      }
    }
  }
</script>
