const  jwt = require("jsonwebtoken");
const  secret = require("../config").secret;

module.exports = async function(ctx,next) {
  const auth =  ctx.get('Authorization');
  const token = auth;
  try{
    const payload = jwt.verify(token,secret);
    console.log(payload)
    ctx.user_id = payload.id
    ctx.name = payload.name;
    await  next()
  }catch(err){
    ctx.throw(401, err)
  }
}
