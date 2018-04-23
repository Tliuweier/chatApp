<template>
  <div id="footer">

      <div class="weui-tabbar">
        <a href="javascript:;" class="weui-tabbar__item" :class="[this.fullpath==='/message'?'weui-bar__item_on':'']" @click="toMessage">
      <span style="display: inline-block;position: relative;">
        <img :src="[this.fullpath==='/message'?'/static/images/weixin-a.png':'../static/images/weixin.png']" alt="" class="weui-tabbar__icon">
        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-if="totalnum">{{totalnum}}</span>
      </span>
          <p class="weui-tabbar__label">微信</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" :class="[this.fullpath==='/contact'?'weui-bar__item_on':'']" @click="toContact">
          <img :src="[this.fullpath==='/contact'?'/static/images/tongxunlu-a.png':'../static/images/tongxunlu.png']"  alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">通讯录</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" :class="[this.fullpath==='/discover'?'weui-bar__item_on':'']" @click="toDiscover">
      <span style="display: inline-block;position: relative;">
        <img :src="[this.fullpath==='/discover'?'/static/images/xingqiu-a.png':'../static/images/xingqiu.png']"  alt="" class="weui-tabbar__icon">
        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
      </span>
          <p class="weui-tabbar__label">发现</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item" :class="[this.fullpath==='/me'?'weui-bar__item_on':'']" @click="lookMe">
          <img :src="[this.fullpath==='/me'?'/static/images/user-a.png':'../static/images/user.png']" alt="" class="weui-tabbar__icon">
          <p class="weui-tabbar__label">我</p>
        </a>
      </div>


  </div>

</template>
<style lang="scss" scoped>
  @import '../assets/weui.css';
  #footer{

    .weui-tabbar{
      position: fixed;
    }

  }
</style>

<script>
  export  default {
    name:'Tfooter',
    props:['path','totalnum'],
    data(){
      return{
        fullpath:this.path
      }
    },
    components: {},
    methods:{
      toMessage(){
        this.$router.push('/message')
      },
      toContact(){
        this.$router.push('/contact')
      },
      toDiscover(){
        this.$router.push("/discover")
      },
      lookMe(){
        this.$router.push("/me")
      }
    }
  }
</script>
