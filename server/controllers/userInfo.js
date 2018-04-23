const userModel = require("../models/user_info");



let findByID = async (ctx,next)=>{
  var user_id = ctx.query.user_id;
  const RowDataPacket = await userModel.findByID(user_id);
  userInfo = JSON.parse(JSON.stringify(RowDataPacket));
  ctx.body={
    success:true,
    data:{
      userInfo:userInfo
    }
  }
}

/**
 * 通过用户名获取用户信息
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
let findUIByName = async (ctx,next)=>{
  // console.log(ctx.query.other_user_id);
  const RowDataPacket = await userModel.findUIByName(ctx.query.name);
  userInfo = JSON.parse(JSON.stringify(RowDataPacket));
  ctx.body={
    success:true,
    data:{
      userInfo:userInfo
    }
  }
};




let isFriend = async(ctx,next)=>{
  try{
    console.log(ctx.query.other_user_name);
    const RowDataPacket = await userModel.findUIByName(ctx.query.other_user_name);
    var res = JSON.parse(JSON.stringify(RowDataPacket));
    if(res.length==0){
      ctx.body = {
        success:false
      }
      return;
    }
    var other_user_id = res[0]["id"];
    const RowData1 = await userModel.isFriend(ctx.user_id, other_user_id)
    const RowData2 = await userModel.isFriend(other_user_id, ctx.user_id)
     isMyFriend = JSON.parse(JSON.stringify(RowData1))
     isHisFriend = JSON.parse(JSON.stringify(RowData2))

      ctx.body={
        success:true,
        data:{
          isMyFriend:isMyFriend,
          isHisFriend:isHisFriend
        }
      }

  }catch (err){
    console.log(err)
  }


}
let findContact = async(ctx,next)=>{
  var user_id = ctx.user_id;
  const RowData = await userModel.findContact(user_id);
  allcontact = JSON.parse(JSON.stringify(RowData));
  ctx.body = {
    success:true,
    data:{
      allcontact:allcontact
    }
  }
}

let agreeBeFriend = async(ctx,next)=>{
  const RowData1 =await userModel.isFriend(
    ctx.user_id,
    ctx.request.body.other_user_id
  )
  const RowData2 =await userModel.isFriend(
    ctx.request.body.other_user_id,
    ctx.user_id,
  )
  const isMyFriend = JSON.parse(JSON.stringify(RowData1));
  const isHisFriend = JSON.parse(JSON.stringify(RowData2));
  console.log(isMyFriend+"   "+isHisFriend);
  if(isMyFriend.length == 0 ){
    await userModel.addAsFriend(
      ctx.user_id,
      ctx.request.body.other_user_id,
      ctx.request.body.time
    );
  }
  if(isHisFriend.length == 0){
    await userModel.addAsFriend(
      ctx.request.body.other_user_id,
      ctx.user_id,
      ctx.request.body.time
    );
  }
  ctx.body = {
    success:true
  }
}
module.exports = {
  findUIByName,
  isFriend,
  findByID,
  findContact,
  agreeBeFriend
}
