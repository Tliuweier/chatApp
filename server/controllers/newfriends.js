
const newFriendsModel = require("../models/newFriends");

let getnewFriends = async (ctx,next)=>{
  const RowData = await  newFriendsModel.getnewFriends(ctx.user_id);
  const newFriends = JSON.parse(JSON.stringify(RowData));
  ctx.body = {
    success:true,
    data:{
      newFriends:newFriends
    }
  }
}

let insertNewFriend = async (ctx,next)=>{
      const arr = [ctx.user_id,ctx.request.body.to_user,ctx.request.body.content, ctx.request.body.time, ctx.request.body.status]
      await newFriendsModel.insertNewFriends(arr).then(result => {
        ctx.body = {
          success: true
        };
      }).catch(err => {
        console.log(err);
      });
}
let updateNewFriends = async (ctx , next)=>{
  await newFriendsModel.updateNewFriends(ctx.request.body.from_user, ctx.user_id).then(result => {
    console.log('updateNewFriends更新我的新好友通知状态成功')
    ctx.body = {
      success: true
    };
  }).catch(err => {
    console.log(err);
  });
}

module.exports ={
  getnewFriends,
  insertNewFriend,
  updateNewFriends
}
