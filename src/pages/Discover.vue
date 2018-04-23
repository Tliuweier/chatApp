<template>
  <div id="Discover" @click="MenuOutsideClick">
    <theader1 :totalnum="totalnumGetter"></theader1>
    <div style="padding-top: 45px">
      <div class="weui-cells" @click="toMoments">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-circle.png">
          </div>
          <div class="weui-cell__bd">
            <p>朋友圈</p>
          </div>
          <div class="weui-cell__hd">
            <img src="../assets/images/header/header01.png">
            <i class="new-msg-dot"></i>
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/contact_add-friend-scanqr.png">
          </div>
          <div class="weui-cell__bd">
            <p>扫一扫</p>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-shake.png">
          </div>
          <div class="weui-cell__bd">
            <p>摇一摇</p>
          </div>
        </div>
      </div>


      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../assets/images/find_icon-bottle.png">
          </div>
          <div class="weui-cell__bd">
            <p>漂流瓶</p>
          </div>
        </div>
      </div>
    </div>

    <tfooter :path="path"></tfooter>
  </div>

</template>


<style lang="scss" scoped>

  #Discover{
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
    .new-msg-dot {
      position: absolute;
      top: 8px;
      right: 18px;
      display: inline-block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background-color: red;
    }
  }

</style>

<script>
  import  Theader1 from '../components/Header1.vue'
  import  Tfooter from '../components/Footer.vue'
  import {mapGetters} from 'vuex'
  export  default {
    data(){
      return{
        path:''
      }
    },
    components:{
      Theader1,
      Tfooter
    },
    computed:{
      ...mapGetters([
        'totalnumGetter'
      ])
    },
    created(){
      this.path = this.$router.history.current.path;
    },
    methods:{
      MenuOutsideClick(e){

//        console.log(e.target.className);
        if(e.target.className === 'iconfont icon-tips-jia'){
          e.stopPropagation();
          $('#menu').removeClass("tips-close");
          $('#menu').attr({'class':'tips-open tips-menu'});

        }else{
          e.stopPropagation();
//          event.stopPropagation();
          $('#menu').removeClass("tips-open");
          $('#menu').attr({'class':'tips-close tips-menu'});

        }
      },
      toMoments(){
        this.$router.push("/moments");
      },
      toPhoto(){
        this.$router.push("/Photo");
      }
    }
  }

</script>
