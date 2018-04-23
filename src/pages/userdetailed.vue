<template>
  <div id="userdetaild">
    <theader1 :path="path"></theader1>
    <div v-if="userDataList">
      <div class="weui-tab__content" style="display: block;margin-top: 50px">
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <img :src="userDataList.avator" alt="" class="Me-header"/>
            </div>
            <div class="weui-cell__bd" style="margin-left: 5px">
              <h4 class="Me-nickname">{{remark ===''?userDataList.name:remark}}<span class="gender" :class="[userDataList.sex==='男'?'gender-male':'gender-female']"></span></h4>
              <p class="Me-wxid"> 微信号：{{userDataList.name}}</p>
            </div>

          </div>
        </div>
        <div class="weui-cells">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <!--<span class="iconfont  icon-chat-friends" style="margin: 10px;font-size: 30px;"></span>-->
              <p style="display:contents;">设置备注和标签</p>
            </div>
          </div>
        </div>


        <div class="weui-cells">
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              地区
            </div>
            <div class="weui-cell__bd">
              <p style="font-size: 13px;color: #999; margin-left: 56px;"> 广州&nbsp;&nbsp;&nbsp;  深圳</p>
            </div>
          </div>
          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              <p>个人相册</p>
            </div>
            <div class="weui-cell__bd" style="-webkit-flex: 4;text-align: left; margin-left: 20px;">

              <div class="album-list">


                <img :src="userDataList.avator" style="width: 50px; margin: 0px 5px;" v-for="item in 1">
                <!--<img src="https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg" style="width: 50px; margin: 0px 5px;">-->
              </div>
            </div>
          </div>

          <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd">
              更多
            </div>
            <div class="weui-cell__bd">

            </div>
          </div>
        </div>
      </div>



      <div style="margin-top: 20px">
        <a v-if="this.isMyFriend===false &&this.isHisFriend ===false" href="javascript:;" class="weui-btn weui-btn_primary" style="width: 80%" @click="addfriend">添加到通讯录</a>
        <a v-if="this.isMyFriend===false &&this.isHisFriend ===true" href="javascript:;" class="weui-btn weui-btn_primary" style="width: 80%">添加到通讯录</a>
        <a v-if="this.isMyFriend===true &&this.isHisFriend ===true" href="javascript:;" class="weui-btn weui-btn_primary" style="width: 80%" @click="goChat">发送消息</a>
        <a v-if="this.isMyFriend===true &&this.isHisFriend ===true" href="javascript:;" class="weui-btn weui-btn_default" style="width: 80%">视频聊天</a>
        <a v-if="this.isMyFriend===true &&this.isHisFriend ===false" href="javascript:;" class="weui-btn weui-btn_primary" style="width: 80%">发送消息</a>
        <a v-if="this.isMyFriend===true &&this.isHisFriend ===false" href="javascript:;" class="weui-btn weui-btn_default" style="width: 80%">视频聊天</a>
      </div>
    </div>
    <div v-else style="margin-top: 50px;text-align: center;">
      用户不存在
    </div>


  </div>

</template>


<style lang="scss" scoped>
  #userdetaild {
    .gender-male {
      background: url("../assets/images/contact_male.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }

    .gender-female {
      background: url("../assets/images/contact_female.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
    .weui-cell__ft img {
      height: 25px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .weui-cell__hd img {
      width: 70px;
      margin-right: 8px;
      display: block;
    }
    .weui-cell__bd .gender {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-left: 4px;
      margin-top: -5px;
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
        state:false,
        userDataList:{},
        myInfo:{},
        isMyFriend:false,
        isHisFriend:false,
        remark:''
      }
    },
    components:{
      Theader1
    },
    methods:{
      findUser(){
        var account = this.$route.query.account;
        axios.get('/api/t1/find_user',{
          params:{
            name:account,
          }
        }).then(res =>{
          if(res.data.success){

            this.userDataList = res.data.data.userInfo[0];
          }
          console.log(res);
        })
      },
      //判断是否我的好友
      isFriend(){
        var account = this.$route.query.account;
        axios.get('/api/t1/is_friend',{
          params: {
            other_user_name: account
          }
        }).then(res =>{
          console.log(res)
          if(res.data.success){
            if(res.data.data.isMyFriend.length!=0){
                this.isMyFriend = true;
                this.remark = res.data.data.isMyFriend[0].remark;
            }
            if(res.data.data.isHisFriend.length!=0){
              this.isHisFriend = true;
            }
          }
        }).catch(err =>{
          console.log('err2',err)
        })
      },

      goChat(){
//        console.log(this.userDataList.id)
        this.$router.push({path:'chat',query: { user_id: this.userDataList.id,username:this.userDataList.name }})

      },

      addfriend(){
//        this.$router.push({path:'chat',query: { user_id: this.userDataList.id,username:this.userDataList.name }})
        this.$router.push({path:'verification',query:{other_user_id:this.userDataList.id}})
//        this.$router.push('/verification');
      }
    },
    async created(){
      this.myInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.path = this.$router.history.current.path
      this.findUser();
      await this.isFriend();

    },
    mounted(){
      console.log(this.userDataList);
    }
  }
</script>
