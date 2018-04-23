import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/pages/Login';
import Message from '@/pages/Message';
import Register from '@/pages/Register';
import Chatroom from '@/pages/Chatroom';
import Me from '@/pages/Me';
import Photo from '@/pages/Photo';
import Moments from '@/pages/Moments';
import Moments1 from '@/pages/Moments1';
import Discover from '@/pages/Discover';
import priavtechat from '@/pages/privatechat';
import test from '@/pages/test';
import myself from '@/pages/My-self';
import input from '../components/input'
import more from '@/pages/more'
import address from '@/pages/address'
import AddAddress from '@/pages/Add-Address'
import chat from '@/pages/chat'
import contact from '@/pages/contact'
import addfriend from '@/pages/addfriend'
import userdetailed from '@/pages/userdetailed'
import verification from '@/pages/verification'
import newfriend from '@/pages/newFriends'
import axios from 'axios';

Vue.use(Router)


const router = new Router({
  routes: [{
      path:"/message",
      component:Message
    },{
      path:'/login',
      component:Login
    },{
      path:'/register',
      component:Register
    },{
      path:'/chatroom',
      component:Chatroom
    },{
      path:'/me',
      component:Me
    },{
      path:'/photo',
      component:Photo
    },{
      path:'/moments',
      component:Moments
    },{
    path:'/discover',
    component:Discover
    },
    {
      path:'/moments1',
      component:Moments1
    },
    {
      path:'/priavtechat',
      component:priavtechat
    },{
      path:'/test',
      component:test
    },{
      path:'/myself',
      component:myself
    },{
      path:'/changename',
      component:input
    },{
      path:'/more',
      component:more
    },{
      path:'/address',
      component:address
    },{
      path:'/addaddress',
      component:AddAddress
    },{
      path:'/chat',
      component:chat
    },{
      path:'/contact',
      component:contact
    },{
      path:'/addfriend',
      component:addfriend
    },{
      path:'/userdetailed',
      component:userdetailed
    },{
      path:'/verification',
      component:verification
    },{
      path:'/newfriend',
      component:newfriend
    },
    {
      path: '/',
      redirect:'/login'
    }
  ]
});
//全局钩子
router.beforeEach((to, from, next) => {
  if (!localStorage.userToken) {
    if (to.path === "/login" || to.path === "/register") {
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.path === "/login" || to.path === "/register") {
      next("/message");
    } else {
      next();
    }
  }
});
export default router;
