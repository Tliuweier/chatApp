const privateChatModel = require("../models/privateChat");

let getprivateDetail= async (ctx,next)=>{
    const to_user = ctx.query.to_user;
    const  from_user = ctx.user_id;
    const RowDataPacket = await privateChatModel.getPrivateDetail(from_user,to_user)
    privateDetail = JSON.parse(JSON.stringify(RowDataPacket));
    ctx.body = {
      success: true,
      data: {
        privateDetail: privateDetail
      }
    }

}

let savePrivateMsg = async(ctx,next)=>{
      const from_user = ctx.user_id,
        to_user = ctx.request.body.to_user,
        message = ctx.request.body.message,
        name = ctx.request.body.name,
        time = ctx.request.body.time;
      await privateChatModel.savePrivateMsg(from_user,to_user,message,name,time)
        .then(result=>{
          console.log("privateChatModel11", result);
          if (result) {
            ctx.body = {
              success: true
            };
            console.log("保存私聊消息成功");
          }
          })
        .catch(err=>{
          console.log(err);
        })

}


module.exports = {
  getprivateDetail,
  savePrivateMsg
}
