<template>
  <div id="newFriends">
    <theader1 :path="path"></theader1>
    <div class="weui-tab__content" style="display: block; padding-top: 50px">
      <div class="weui-cells">


        <div class="weui-cell weui-cell_access" v-for="item in newFriendGetter">
          <div class="weui-cell__hd">
            <img :src="item.avator" alt="" class="Me-header" />
          </div>
          <div class="weui-cell__bd">
            <h4 class="Me-nickname">{{item.name}}</h4>
            <p class="Me-wxid" style="color: #999;font-size: 12px">{{item.content}}</p>
          </div>
          <div class="weui-cell__hd">
            <a v-if="item.status ===0"  href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" @click="agreeAddFriend(item.from_user)" >同意</a>
            <span v-if="item.status ===1"  >已添加</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  #newFriends{
      .weui-cell__ft img {
        height: 20px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .weui-cell__hd img {
        width: 40px;
        margin-right: 8px;
        display: block;
      }

  }

</style>

<script>
  import Theader1 from '../components/Header1.vue'
  import axios from "axios"
  import {mapGetters} from 'vuex'
  export  default {
    components:{
      Theader1
    },
    computed:{
      ...mapGetters([
        'newFriendGetter'
      ])
    },
    methods:{
      getMsgBySocket(){
        socket.on('getresponse',(data)=>{
          console.log('getresponse',data);
          this.$store.commit('newFriendsMutation',data)
        })
      },
      async agreeAddFriend(val){
        this.time = Date.parse(new Date()) / 1000;
        await axios.post('/api/t1/be_friend', {
          other_user_id: val,
          time: this.time //时间
        });
        this.updateNewFriends(val);
      },
      async updateNewFriends(val){
        await axios.put('/api/t1/update_newfriends', {
          from_user: val
        })
        let data = {};
        this.newFriendGetter.forEach((ele) => {
          if (ele.from_user == val) {
            ele.status = 1;
            data = {
              avator: ele.avator,
              id: val,
              other_user_id: val,
              message:ele.content ,
              time: this.time,
              name: ele.name,
              type: "private",
              action: "push",
            }
          }
        })
        this.$store.commit('updateListMutation', data)
      }
    },
    data(){
      return{
        userInfo:{}
      }
    },
    created(){
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.$store.dispatch('newFriendAction',this.userInfo.user_id)
      this.path = this.$router.history.current.path
    }

  }
</script>
