const { query } = require("../utils/db");

let getPrivateDetail =function (from_user,to_user) {
  const _sql = 'select p.from_user,p.to_user, p.message ,p.time ,i.avator , i.name ,i.status  from private__msg as p  inner join user_info as i  on p.from_user = i.id  where  (p.from_user = ? AND p.to_user   = ? )  or (p.from_user = ? AND p.to_user   = ? )  order by time'
  return query(_sql,[from_user,to_user,to_user,from_user])
}
let savePrivateMsg = function (from_user,to_user,message,name,time) {
  const data = [from_user,to_user,`${name}:${message}`,time]
  const _sql =
    "INSERT INTO private__msg(from_user,to_user,message ,time)  VALUES(?,?,?,?); "
  return query(_sql,data)
}

module.exports = {
  getPrivateDetail,
  savePrivateMsg
};
