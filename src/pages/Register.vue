<template>
  <div class="login">
    <div class="bgcolor">
      <div class="display_flex">
        <router-link to="/login">
          <h3 class="inactive">登录</h3>
        </router-link>

          <h3 class="active">注册</h3>

      </div>

      <div class="center_position">
        <img width="60%" src="../assets/icon.svg" id="icon" alt="User Icon"/>
      </div>

      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">账号</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入账号" v-model="name"/>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="password"  placeholder="请输入密码" v-model="password"/>
          </div>
        </div>
      </div>
      <div class="center_position">
        <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" @click="register">注册</a>
      </div>

    </div>
  </div>

</template>


<style>
  .login{
    /*position: fixed;*/
    /*top:10%;*/
    /*display: flex;*/
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: .2rem .2rem .2rem .2rem;
    background: #fff;
    position: relative;
    box-shadow: 0 0.6rem 1.2rem 0 rgba(0,0,0,.3);
    text-align: center;
  }
  .display_flex{
    margin: 20px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .center_position{
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
  .active{
    color: #39ace7;

  }
  .inactive{
    color: #ccc;

    text-decoration:underline;
  }
</style>

<script>
  import axios from "axios";
  import qs from "qs";
  export  default {
    name:"register",
    data(){
      return{
        name:"",
        password:"",

      }
    },
    methods:{
      register(){
        if(this.name !=="" && this.password !==""){
          axios.post("/api/t1/register",
            {name:this.name, password : this.password}).then(res=>{
            if(res.data.success){
            }else{
              alert("err")
            }
          }).catch(err=>{
            console.log(err)
            alert("服务器出错了")
          })
        }else{
          alert(this.name ===""?"请输入用户名":"请输入密码");
        }
      }
    }
  }

</script>
