// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body);
axios.defaults.baseURL='http://localhost:8083'
//拦截器
axios.interceptors.request.use(
  config=>{
    const token = localStorage.getItem("userToken");
    if(token){
      config.headers.common['Authorization'] = token;
    }
    return config;
  },
  error =>{
    return Promise.reject(error);
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
