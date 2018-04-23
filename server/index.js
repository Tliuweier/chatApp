var http = require('http');
var Koa = require('koa');
var app = new Koa();
var cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser')
var router = require('./routes/index');
const {query}  = require("./utils/db");
var socketModel = require("./models/socketHander");



var server = http.createServer(app.callback());
var io =require('socket.io')(server);


app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

global.query = query

var numUsers = 0;
io.on("connection",socket=>{
  var addedUser= false;

  const socketId = socket.id;
  socket.on("login",async userId =>{
    await  socketModel.saveUserSocketId(userId,socketId);
  });

  socket.on("update" , async userId=>{
    await  socketModel.saveUserSocketId(userId,socketId);
  });
  //私聊
  socket.on("sendPrivateMsg", async data=>{
    console.log(data);
    const arr =  await socketModel.getUserSocketId(data.to_user);
    const RowDataPacket = arr[0];
    const socketid = JSON.parse(JSON.stringify(RowDataPacket)).socketid;
    io.to(socketid).emit("getPrivateMsg",data);
  });

  //测试群聊
  socket.on('send message',data=>{
    console.log("message:  " +data);
    io.sockets.emit("get message",data);
  });
  socket.on('new message',data=>{
    console.log("message:  " +data);
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });
  socket.on('add user',username=>{
    console.log("username:  " +username);
    //if(addedUser) return;
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login',{
      numUsers:numUsers
    });
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });
  socket.on("sendRequest",async data => {
    console.log("sendRequest", data);
    const arr = await socketModel.getUserSocketId(data.to_user);
    const RowData =arr[0];
    const socketid = JSON.parse(JSON.stringify(RowData)).socketid;
    console.log('给谁的socketid',socketid)
    io.to(socketid).emit("getresponse", data);
  });


  socket.on("disconnect", data => {
    console.log("disconnect", "new user");
  });
})


server.listen(8083);
console.log('监听8083！');
