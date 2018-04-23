
<template>
  <div id="more">
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access" @click="changeSex">
        <div class="weui-cell__bd">
          <p>性别</p>
        </div>
        <div class="weui-cell__hd">
          男
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>地区</p>
        </div>
        <div class="weui-cell__hd">
          广东广州
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>个性签名</p>
        </div>
        <div class="weui-cell__hd">
          执子之手，与子偕老！
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  #more{
    .weui-cell__hd{
      font-size: 13px;
    }
  }

</style>

<script>
  export  default {
    data(){
      return{
        sex:''
      }
    },
    methods:{
      changeSex(){

      }
    }
  }
</script>
