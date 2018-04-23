<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  }
}
</script>

<style lang="scss">
      /*icon*/

      @import "./assets/css/lib/iconfont.css";
      @import "./assets/css/lib/iconfont2.css";
      @import "./assets/css/base.css";
      @import "./assets/weui.css";
      @import "./assets/css/lib/weui.min.css";
      body {
        background: #fbf9fe;
      }
</style>
