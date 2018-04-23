<template>
  <div id="we-input">
    <theader1 :path="path"></theader1>
    <div class="weui-cells" style="margin-top: 50px;">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" v-model="nickname"/>
        </div>
      </div>
    </div>
    <div class="weui-cells__tips">好名字可以让你的朋友更容易记住你</div>
  </div>

</template>


<style lang="scss" scoped>
  #we-input{
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
        nickname:''
      }
    },
    created(){
      this.nickname = JSON.parse(localStorage.getItem("userInfo")).name
      this.path = this.$router.history.current.path
    },
  }
</script>
