<template>

    <div id="myself">
      <theader1 :path="path"></theader1>


      <div class="weui-cells" style="margin-top: 50px">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <p>头像</p>
          </div>
          <div class="weui-cell__hd">
            <img :src="myInfo.avator" class="Me-header">
          </div>
        </div>
        <div class="weui-cell weui-cell_access" @click="toInput">
          <div class="weui-cell__bd">
            昵称
          </div>
          <div class="weui-cell__hd">
            {{myInfo.name}}
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            微信号
          </div>
          <div class="weui-cell__hd">
            <p class="my-nickname">{{myInfo.name}}</p>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            二维码名片
          </div>
          <div class="weui-cell__hd">
            <img src="../assets/chat-info-qr.png">
          </div>
        </div>
        <div class="weui-cell weui-cell_access" @click="tomore">
          <div class="weui-cell__bd">
            更多
          </div>

        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" @click="toaddress">
          <div class="weui-cell__bd">
            我的地址
          </div>

        </div>
      </div>
    </div>

</template>


<style lang="scss" scoped>
  #myself {
    .weui-cell__hd img {
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
    }
    img.Me-header {
      display: block;
      margin-right: 10px;
      border-radius: 4px;
      width: 60px;
      height: 60px;
    }
    .my-nickname{
      font-size: 13px;
    }
  }


</style>

<script>
  import Theader1 from '../components/Header1.vue'
  export  default {
    components:{
      Theader1
    },
    data(){
      return{
        nickname:'',
        path:'',
        myInfo:{}
      }
    },
    methods:{
      toInput(){
        this.$router.push("/changename");
      },
      tomore(){
        this.$router.push("/more");
      },
      toaddress(){
        this.$router.push("/address");
      }
    },
    created(){
      console.log(this.$router.history.current.path);
      this.myInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.path = this.$router.history.current.path
    }
  }
</script>
