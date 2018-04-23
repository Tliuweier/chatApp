<template>
  <div id="Theader" >
    <a v-on:click="add">加一</a>
    <button >减一</button>
  </div>
</template>

<style>
    .Theader{
        position: fixed;
        background-color: black;
        height: 40px;
        width: 100%;
        z-index: 1;
        display: flex;
        justify-content:space-between;
        align-items: center;
        flex-direction: row;
        padding: 0 15px;
    }
    .Theader span{
      margin:5px 20px;
    }

</style>

<script>
  export  default {
    name:'Theader',
    props:['count'],
    components: {},
    data(){
      return{
        counter:0
      }
    },
    methods:{
      add(){
        this.counter += 1
        console.log(this.counter);
        this.$emit('add')
      }
    }
  }

</script>
