<template>
  <div>
    <theader></theader>
    <div style="position: relative;top: 40px; bottom: 90px;">
      <div class="my-portrait">

      </div>
      <div class="my-action">
        <img v-bind:src="fromUserInfo.avator" width="80" height="80" :style="{position:'relative',top: -40+'px',right:  -imgright+'px'}"/>
        <span :style="{position: 'relative',top: -85+'px',right: -nameright+'px'}">{{fromUserInfo.name}}</span>
        <span :style="{position: 'relative',top: -25+'px',right: -signright+'px'}">人在，塔在</span>
        <div style="display: flex;flex-direction: row;margin:10px 0 0 10px">
          <span style="font-size: 34px;margin-right: 30px">今天</span>
          <img src="../assets/logo.png" width="80" height="80" />
        </div>

        <div style="display: flex;flex-direction: row;margin:10px 0 0 10px">
            <span style="font-size: 34px;margin-right: 30px">14<span style="font-size: 16px">3月</span></span>
            <div style="flex-direction: column;">
              <div style="display: flex;flex-direction: row;margin-bottom: 5px">
                <img src="../assets/logo.png" width="80" height="80" />

                <div style="display: flex;flex-direction: column;margin: 0 10px 0 10px; justify-content: space-around">
                  <span >今天很高兴时代科技</span>
                  <span style="font-size: 13px;color: #CCCCCC">共2张</span>
                </div>
              </div>
              <div style="display: flex;flex-direction: row;margin-bottom: 5px">
                <img src="../assets/logo.png" width="80" height="80" />

                <div style="display: flex;flex-direction: column;margin: 0 10px 0 10px; justify-content: space-around">
                  <span >今天很高兴时代科技</span>
                  <span style="font-size: 13px;color: #CCCCCC">共2张</span>
                </div>
              </div>
              <div style="display: flex;flex-direction: column;margin: 0 10px 0 10px; justify-content: space-around;">
                <span >今天很高兴时代科技</span>
              </div>
            </div>
        </div>



        <div style="display: flex;flex-direction: row;margin:10px 0 0 10px">
          <span style="font-size: 34px;margin-right: 30px">12<span style="font-size: 16px">3月</span></span>
          <div style="display: flex;flex-direction: column;margin: 0 10px 0 10px; justify-content: space-around;">
            <span >今天很高兴时代科技</span>
          </div>
        </div>

      </div>
    </div>




  </div>

</template>
<style>
  .my-portrait{
    height: 200px;
    width: 100%;
    background-color: #39ace7;
  }
  .my-action{
    position: relative;
    width: 100%;
    min-height:100%;
    background-color: white;
  }

</style>

<script>
  window.onload = function(){
    // 获取屏幕高度 document.documentElement.clientHeight
    console.log(document.documentElement.clientHeight);
    // 获取屏幕宽度 document.documentElement.clientWidth
    console.log(document.documentElement.clientWidth);
  }
  import  Theader from '../components/Header.vue'
  import  Tfooter from '../components/Footer.vue'
  export  default {
    data(){
      return{
        imgright:'',
        nameright:'',
        signright:'',
        fromUserInfo:{},//用户自己
      }
    },
    components:{
      Theader,
      Tfooter
    },
    created(){
      this.fromUserInfo = JSON.parse(localStorage.getItem("userInfo"))
      this.imgright=document.documentElement.clientWidth-90;
      this.nameright = document.documentElement.clientWidth-230;
      this.signright = document.documentElement.clientWidth-225;
    }
  }
</script>
