<template>
  <div>
    <p>{{count}}</p>
    <theader :count="count" v-on:add="addtotal"></theader>
  </div>

</template>


<style>


</style>

<script>
  import  Theader from '../components/Header.vue'
  import  Tfooter from '../components/Footer.vue'
  export  default {
    data(){
      return{
        count:0
      }
    },
    components:{
      Theader,
      Tfooter
    },
    methods:{
      addtotal(){
        console.log(1230);
      }
    }
  }

</script>
