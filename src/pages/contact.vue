<template>
  <div id="contact" @click="MenuOutsideClick">
    <theader1 :path="path" :totalnum="totalnumGetter"></theader1>
    <div style="padding-top: 27px">
      <div class="weui-cells_contact-head weui-cells weui-cells_access">
        <div class="weui-cell" @click="tonewfriend">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../assets/images/contact_top-friend-notify.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../assets/images/contact_top-addgroup.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../assets/images/contact_top-tag.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </div>
      </div>
    </div>




    <div v-for="(value,key) in contactsList">
      <div :ref="`key_${key}`" class="weui-cells__title">
        {{key}}
      </div>
      <div class="weui-cells" >

        <div class="weui-cell weui-cell_access" v-for="item in value" @click="userdetailed(item.other_name)">
          <div class="weui-cell__hd">
            <img :src="item.avator" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            {{item.other_name}}
          </div>
        </div>
      </div>
    </div>







    <div class="initial-bar">
      <span v-for="item in contactsInitialList"  @click="toPo(item)" >{{item}}</span>
      <!--for start-->

      <!--for end-->
    </div>
    <tfooter :path="path"></tfooter>
  </div>
</template>


<style lang="scss" scoped>
#contact{
  padding-bottom: 49px;
  img {
    width: 32px;
    height: 32px;
    display: block;
    margin-right: 10px
  }
  .initial-bar {
    position: fixed;
    top: 50%;
    font-size: 11px;
    line-height: 1.2;
    right: 2px;
    width: 10px;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0)
  }
  .initial-bar span {
    display: block;
    text-align: left
  }
}

</style>

<script>
  import Theader1 from '../components/Header1.vue'
  import  Tfooter from '../components/Footer.vue'
  import {mapGetters} from 'vuex'
  export  default {
    data(){
      return{
        path:'',

      }
    },
    computed:{
      ...mapGetters([
        'totalnumGetter',
        'allContactsGetter',
        'contactsList',
        'contactsInitialList'
      ])
    },
    components:{
      Theader1,
      Tfooter
    },
    created(){
      this.path = this.$router.history.current.path
      this.$store.dispatch('allContactsAction');

    },
    methods:{
      MenuOutsideClick(e){

//        console.log(e.target.className);
        if(e.target.className === 'iconfont icon-tips-jia'){

          $('#menu').removeClass("tips-close");
          $('#menu').attr({'class':'tips-open tips-menu'});

        }else{
//          event.stopPropagation();
          $('#menu').removeClass("tips-open");
          $('#menu').attr({'class':'tips-close tips-menu'});

        }
      },
      toPo(i){
        window.scrollTo(0,this.$refs['key_'+i][0].offsetTop)
      },
      tonewfriend(){
        this.$router.push('/newfriend');
      },
      userdetailed(name){
        console.log(name);;
        var account = name
        this.$router.push({ path: 'userdetailed', query: { account: account }})
      }
    }
  }
</script>
