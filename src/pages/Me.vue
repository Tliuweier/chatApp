<template>
  <div id="Me" @click="MenuOutsideClick">
    <theader1 :path="path" :totalnum="totalnumGetter"></theader1>
    <div class="weui-tab__content" style="display: block; padding-top: 50px">
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" @click="tomyself">
          <div class="weui-cell__hd">
            <img :src="fromUserInfo.avator" alt="" class="Me-header" />
          </div>
          <div class="weui-cell__bd">
            <h4 class="Me-nickname">{{fromUserInfo.name}}</h4>
            <p class="Me-wxid"> 微信号：{{fromUserInfo.name}}</p>
          </div>
          <div class="weui-cell__hd">
            <img src="../assets/chat-info-qr.png">
          </div>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/images/me_more-my-album.png">
        </div>
        <div class="weui-cell__bd">
          <p>收藏</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/images/me_more-my-favorites.png">
        </div>
        <div class="weui-cell__bd">
          <p>相册</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/images/me_my-card-package-icon.png">
        </div>
        <div class="weui-cell__bd">
          <p>卡包</p>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/images/me_more-expression.png">
        </div>
        <div class="weui-cell__bd">
          <p>表情</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <img src="../assets/images/me_more-setting.png">
        </div>
        <div class="weui-cell__bd">
          <p>设置</p>
        </div>
      </div>
    </div>
    <tfooter :path="path"></tfooter>
  </div>


</template>


<style lang="scss" scoped>

  #Me {
    padding-bottom: 60px;
    .weui-cell__ft img {
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .weui-cell__hd img {
      width: 23px;
      margin-right: 8px;
      display: block;
    }
    img.Me-header {
      display: block;
      margin-right: 10px;
      border-radius: 4px;
      width: 60px;
      height: 60px;
    }
    .Me-nickname {
      font-size: 16px;
      margin-bottom: 5px;
    }
    .Me-wxid {
      font-size: 13px;
    }
  }




  .my-account{
    display: flex;
    flex: 1;
    height: 80px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 10px;
  }
  .display-c{
    display: flex;
    flex-direction: column;
  }
  .display-r{
    display: flex;
    flex-direction: row;
  }
  .display-c span{
    margin-top: 5px;
    padding: 0 0 0 10px;
  }
  .my-photo{
    height: 40px;
    background-color: white;
    display: flex;
    padding: 0 20px;
    align-items: center;
    flex: 1;
    margin-top: 10px;
  }
  .my-photo span{
    margin-left: 15px;
  }
  .my-setting{
    margin-top: 1px;
    height: 40px;
    background-color: white;
    display: flex;
    padding: 0 20px;
    align-items: center;
    flex: 1;
  }
  .my-setting span{
    margin-left: 15px;
  }
</style>

<script>
  import  Theader1 from '../components/Header1.vue'
  import  Tfooter from '../components/Footer.vue'
  import {mapGetters} from 'vuex'
  export  default {
    components:{
      Theader1,
      Tfooter
    },
    computed:{
      ...mapGetters([
        'totalnumGetter'
      ])
    },
    data(){
      return{
        fromUserInfo:{},//用户自己
        path:''
      }
    },
    created(){
      this.fromUserInfo = JSON.parse(localStorage.getItem("userInfo"))
      this.path = this.$router.history.current.path
      console.log(this.path);
    },
    methods:{
      MenuOutsideClick(e){

//        console.log(e.target.className);
        if(e.target.className === 'iconfont icon-tips-jia'){

          $('#menu').removeClass("tips-close");
          $('#menu').attr({'class':'tips-open tips-menu'});

        }else{
//          console.log(123)
          $('#menu').removeClass("tips-open");
          $('#menu').attr({'class':'tips-close tips-menu'});

        }
      },
      toPhoto(){
        this.$router.push("/Photo");
      },
      tomyself(){
        this.$router.push("/myself");
      }
    }
  }

</script>
