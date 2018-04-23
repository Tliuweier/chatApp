<template>
  <div id="address">
    <theader1 :path="path"></theader1>


    <div>
      <div class="display-flex-row bg" style="margin-top: 50px">
        <span  class="iconfont icon-chat-friends" style="color: #000;font-size: 23px;margin: 4px;"></span>
        <div class="display-flex-column">
          <div style="font-size:17px;font-weight:550;">谭锦威  13172277837</div>
          <div class="display-flex-row" >
            <div class="address-btn">谭锦威 广东</div> <div style="font-size:13px;width:200px;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;">广东佛山市顺德区北滘镇碧桂园总部大楼</div>
          </div>
        </div>
        <div class="ft-red">编辑</div>
      </div>
    </div>


  </div>
</template>


<style lang="scss" scoped>
  #address{
    .display-flex-row{
      display: flex;
      flex-direction: row;

    }
    .display-flex-column{
      display: flex;
      flex-direction: column;
    }
    .bg{
      height: 70px;
      background-color: #FFFFFF;
      align-items: center;
      border: 1px solid RGB(233,233,233);
      bottom: 10px;
      overflow: hidden;
    }
    .icon_small{
      margin: 0 10px;
    }
    .address-btn{
      width: 75px;
      color: #6193D8;
      border: 1px solid #6193D8;
      border-radius: 10px;
      margin-right: 10px;
      font-size: 13px;
    }
    .ft-red{
      margin-left:5px;
      font-size: 13px;
      color: #E55F68;
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
        path:''
      }
    },created(){
      this.path = this.$router.history.current.path
    }
  }
</script>
