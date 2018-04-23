var router = require('koa-router')();
var baseApi = require('../config').baseApi;
var login = require('../controllers/login');
var register = require('../controllers/register')
var userInfo = require('../controllers/userInfo');
var verify = require('../middlewares/verify');
var privateChat = require('../controllers/privateChat')
var message = require('../controllers/message')
var newFriends = require('../controllers/newfriends')
router.prefix(`/${baseApi}`)
router
  .post('/login',login)
  .post('/register',register)
  .get('/message',verify,message)
  .get('/user_info',verify,userInfo.findByID)
  .get('/find_user',verify,userInfo.findUIByName)
  .get('/is_friend',verify,userInfo.isFriend)
  .get('/private_detail',verify,privateChat.getprivateDetail)
  .post('/priavte_save_msg',verify,privateChat.savePrivateMsg)
  .get('/find_contact',verify,userInfo.findContact)
  .post('/be_friend',verify,userInfo.agreeBeFriend)
  .post('/insert_newfriends',verify,newFriends.insertNewFriend)
  .get('/get_newfriends',verify,newFriends.getnewFriends)
  .put('/update_newfriends',verify,newFriends.updateNewFriends)
console.log("router");
module.exports = router;
