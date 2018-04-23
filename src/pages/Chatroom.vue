<template>
  <div class="wrapper">
    <Theader :num="81"></Theader>

    <ul>
      <li>
        <ChatItem :me="true" :name="'爸爸'" :msg="'你好'"></ChatItem>
      </li>
      <li>
        <ChatItem :me="false" :name="'儿子'" :msg="'不好'"></ChatItem>
      </li>
      <li>
        <ChatItem :me="false" :name="'儿子'" :msg="'不好'"></ChatItem>
      </li>
      <li>
        <ChatItem :me="false" :name="'儿子'" :msg="'不好'"></ChatItem>
      </li>
    </ul>
    <ul class="pages">
      <li class="chat page">
        <div class="chatArea">
          <ul class="messages"></ul>
        </div>
        <input class="inputMessage" placeholder="Type here..." @keyup.enter="hidewindow" v-model="Message"/>
      </li>


      <li class="login page">
        <div class="form">
          <h3 class="title">What's your nickname?</h3>
          <input class="usernameInput" type="text" maxlength="14" @keyup.enter="hidewindow"/>
        </div>
      </li>

    </ul>
    <Tfooter></Tfooter>

  </div>

</template>


<style>
  ul {
    list-style: none;
    word-wrap: break-word;
  }

  /* Pages */

  .pages {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .page {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  /* Login Page */

  .login.page {
    background-color: #000;
  }

  .login.page .form {
    height: 100px;
    margin-top: -100px;
    position: absolute;

    text-align: center;
    top: 50%;
    width: 100%;
  }

  .login.page .form .usernameInput {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    outline: none;
    padding-bottom: 15px;
    text-align: center;
    width: 400px;
  }

  .login.page .title {
    font-size: 200%;
  }

  .login.page .usernameInput {
    font-size: 200%;
    letter-spacing: 3px;
  }

  .login.page .title, .login.page .usernameInput {
    color: #fff;
    font-weight: 100;
  }

  /* Chat page */

  .chat.page {
    display: none;
  }

  /* Font */

  .messages {
    font-size: 150%;
  }

  .inputMessage {
    font-size: 100%;
  }

  .log {
    color: gray;
    font-size: 70%;
    margin: 5px;
    text-align: center;
  }

  /* Messages */

  .chatArea {
    height: 100%;
    padding-bottom: 60px;
  }

  .messages {
    height: 100%;
    margin: 0;
    overflow-y: scroll;
    padding: 10px 20px 10px 20px;
  }

  .message.typing .messageBody {
    color: gray;
  }

  .username {
    font-weight: 700;
    overflow: hidden;
    padding-right: 15px;
    text-align: right;
  }

  /* Input */

  .inputMessage {
    border: 10px solid #000;
    bottom: 0;
    height: 60px;
    left: 0;
    outline: none;
    padding-left: 10px;
    position: absolute;
    right: 0;
    width: 100%;
  }

</style>

<script>
  var FADE_TIME = 150;
  var connected = false;
  import  Theader from '../components/Header.vue'
  import  ChatItem from '../components/ChatItem.vue'
  import  Tfooter from '../components/Footer.vue'
  import  axios from 'axios'
  export  default {
      components:{
        ChatItem,
        Theader,
        Tfooter
      },
      data(){
        return{
          value:'',
          username:'',
          Message:''
        }
      },
      methods:{
        addParticipantsMessage(data){
          var message = '';
          if (data.numUsers === 1) {
            message += "there's 1 participant";
          } else {
            message += "there are " + data.numUsers + " participants";
          }
          this.log(message);
        },
        log(message,options){
          var $el = $('<li>').addClass('log').text(message);
          this.addMessageElement($el, options);
        },
        setUsername(){
          this.username=$('.usernameInput').val().trim();
          if(this.username){
            $('.login.page').fadeOut();
            $('.chat.page').show();
            $('.login.page').off('click');
            $('.usernameInput').focus();
            //add user
            socket.emit('add user',this.username);
          }
        },
        sendMessage(){
          var message = this.Message;
          if(message && connected){
            this.Message='';
            this.addChatMessage({
              username:this.username,
              message:message
            });
            //告诉服务器执行“新消息”并发送一个参数
            socket.emit('new message',message);
          }
        },
        addChatMessage(data,options){
          //var $typingMessage = this.getTypingMessage(data);
          console.log(data+"   "+options);
          var $usernameDiv = $('<span class="username"/>')
            .text(data.username)
            .css('color', 'e21400');
          var $messageBodyDiv = $('<span class="messageBody">')
            .text(data.message);

          var typingClass = data.typing ? 'typing' : '';
          var $messageDiv = $('<li class="message"/>')
            .data('username', data.username)
            .addClass(typingClass)
            .append($usernameDiv, $messageBodyDiv);

          this.addMessageElement($messageDiv, options);
        },
        addMessageElement(el,options){
          var $el = $(el);

          // Setup default options
          if (!options) {
            options = {};
          }
          if (typeof options.fade === 'undefined') {
            options.fade = true;
          }
          if (typeof options.prepend === 'undefined') {
            options.prepend = false;
          }

          // Apply options
          if (options.fade) {
            $el.hide().fadeIn(FADE_TIME);
          }
          if (options.prepend) {
            $('.messages').prepend($el);
          } else {
            $('.messages').append($el);
          }
          $('.messages')[0].scrollTop =  $('.messages')[0].scrollHeight;
        },
        hidewindow(event){
          console.log(event);
          if(event.which===13){
            if(this.username){
              //alert("123");
              this.sendMessage();
              //socket.emit('stop typing');
            }else{
              this.setUsername();
            }
          }
        },
        usernamelogin(){
          var _this = this;
          socket.on('login', function (data) {
            connected = true;
            // Display the welcome message
            var message = "Welcome to Socket.IO Chat – ";
            _this.log(message, {
              prepend: true
            });
            _this.addParticipantsMessage(data);
          });
        },
        newmessage(){
          var _this = this
          socket.on('new message', function (data) {
            _this.addChatMessage(data);
          });
        },
        userjoined(){
          var _this = this
          socket.on('user joined', function (data) {
            _this.log(data.username + ' joined');
            _this.addParticipantsMessage(data);
          });
        }
      },
    created(){
        this.usernamelogin();
        this.newmessage();
        this.userjoined();
    }
  }
</script>
