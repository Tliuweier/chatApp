<template>
  <div>



    <div  v-if="title" style="display: flex; position:fixed;top: 0;z-index:555;flex-direction: row;height: 45px;width:100%;padding-bottom: 10px; background: #373B3E;justify-content: space-between">
      <div style="display: flex;flex-direction: row;">
        <span class="iconfont icon-return-arrow" style="color: #fff;font-size: 23px;padding: 4px;" @click="goback"></span>
        <div class="center">
          <!--<span style="font-size: 17px;color: #fff;padding: 20px;line-height: 50px;">朋友圈</span>-->
          <span style="font-size: 17px;color: #fff;padding: 20px;line-height: 40px;">{{title}}</span>
        </div>
      </div>
      <span v-if="this.fullpath === '/chat'" class="iconfont icon-chat-friends" style="color: #fff;font-size: 23px;margin: 4px;"></span>
      <span v-else-if="this.fullpath === '/moments'" class="iconfont icon-photo" style="color: #fff;font-size: 23px;margin: 4px;"></span>
      <span v-else-if="this.fullpath === '/address'" class="iconfont icon-tips-jia" style="color: #fff;font-size: 23px;margin: 4px;" @click="toAddress"></span>
      <a v-else-if="this.fullpath === '/changename'" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" style="position: absolute;right: 12px;top: 5px;" >保存</a>
      <a v-else-if="this.fullpath === '/addaddress'" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" style="position: absolute;right: 12px;top: 5px;" >保存</a>
      <a v-else-if="this.fullpath === '/verification'" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" style="position: absolute;right: 12px;top: 5px;" v-on:click="toaddfriend">发送</a>
    </div>




    <div class="Thead display-r display-right" v-else>
      <div class="display-r" style="font-size:18px; margin:7px 0 0 10px;" v-if="totalnum>0">微信({{totalnum}})</div>
      <div class="display-r" style="font-size:18px; margin:7px 0 0 10px;" v-if="totalnum==0">微信</div>
      <div class="display-r display-right" style="font-size: 18px;margin: 7px 10px 0 0;">
        <span class="iconfont icon-search" style="margin-right: 40px"></span>
        <span class="iconfont icon-tips-jia" @click="clickopen"></span>

        <ul class="tips-menu tips-close"  id="menu">
          <li @click="launchchat">
            <span class="iconfont icon-tips-xiaoxi"></span>
            <div>发起群聊</div>
          </li>
          <li @click="addfriend">
            <span class="iconfont icon-tips-add-friend"></span>
            <div>添加朋友</div>
          </li>

          <li>
            <span class="iconfont icon-tips-saoyisao"></span>
            <div>扫一扫</div>
          </li>
          <li>
            <span class="iconfont icon-tips-fukuan"></span>
            <div>收付款</div>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>


<style>
  .display-r{
    display: flex;
    flex-direction: row;
  }
  .display-right{
     justify-content: space-between;
  }
  .Thead{
    position: fixed;
    height: 45px;
    width: 100%;
    background-color:  #373B3E;
    color: white;
    z-index: 555;
  }
  .icon-search{
    font-size: 20px;
  }
  .icon-tips-jia{
    font-size: 20px;
  }
  .tips-menu{
    position: absolute;
    z-index: 888;
    width: 133px;
    font-size: 16px;
    right: 5px;
    top: 55px;
    text-align: left;
    border-radius: 2px;
    background-color: #49484b;
    padding: 0 15px;
    -webkit-transform-origin: 90% 0%;
    -ms-transform-origin: 90% 0%;
    transform-origin: 90% 0%
  }
  .tips-open{
    -webkit-transition: initial;
    transition: initial;
    opacity: 1
  }
  .tips-close {
    opacity: 0;
    -webkit-transition: .2s opacity ease, .6s -webkit-transform ease;
    transition: .2s opacity ease, .6s transform ease;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0)
  }
  .tips-menu li {
    position: relative;
    height: 40px;
    line-height: 40px;
  }
  .tips-menu::before{
    width: 0;
    height: 0;
    position: absolute;
    top: -7px;
    right: 10px;
    content: "";
    border-width: 0 6px 8px;
    border-color: transparent transparent #49484b transparent;
    border-style: solid
  }
  .tips-menu .iconfont{
    float: left;
    font-size: 16px;
    margin-right: 15px;
  }
</style>

<script>
  export  default {
    name:'Theader1',
    props:['path','name','totalnum'],
    components: {},
    data(){
      return{
        num:2,
        state:false,
        title:'',
        fullpath:'',
        username :''
      }
    },
    created(){
      this.fullpath = this.path;
      if(this.fullpath === '/chat'){
          this.title  =  this.name; //传一个用户对象
      }else if(this.fullpath === '/moments'){
        this.title = '朋友圈'
      }else if(this.fullpath === '/address'){
        this.title = '我的地址';
      }else if(this.fullpath === '/myself'){
        this.title = '个人信息';
      }else if(this.fullpath === '/changename'){
        this.title = '更改名字';
      }else if(this.fullpath === '/addaddress'){
        this.title = '新增地址'
      }else if(this.fullpath === '/addfriend'){
        this.title = '添加朋友'
      }else if(this.fullpath === '/userdetailed'){
        this.title = '详细资料'
      }else if(this.fullpath === '/verification'){
        this.title = '验证申请'
      }else if(this.fullpath  === '/newfriend'){
        this.title = '新的朋友'
      }


    },
    methods:{
      toaddfriend(){
          this.$emit('toadd')
      },
      addfriend(){
        this.$router.push('/addfriend');
      },
      toAddress(){
        this.$router.push('/addaddress');
      },
      goback(){
        this.$router.back();
      },
      clickopen(){
        if(this.state){
          this.state = false;
        }else {
          this.state = true;
        }
      },
      launchchat(){
        console.log('发起聊天');
      }
    }
  }
</script>
