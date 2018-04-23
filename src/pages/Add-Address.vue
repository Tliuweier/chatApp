<template>
  <div id="Add-Address">
    <theader1 :path="path"></theader1>
    <div class="weui-cells" style="margin-top: 50px">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">收货人</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="姓名"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">手机号码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="11位手机号码" pattern="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">地区</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="地区"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">详细地址</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="街道门牌信息"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">邮政编码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="邮政编码"/>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
#Add-Address{

}

</style>

<script>
  import Theader1 from '../components/Header1.vue'
  export  default {
    components:{
      Theader1
    },data(){
      return{

      }
    },
    created(){
      this.path = this.$router.history.current.path
    },
  }
</script>
