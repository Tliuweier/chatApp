const { query } = require("../utils/db");



let getnewFriends = function (user_id) {
  const _sql ='SELECT n.from_user , n.to_user , n.content, n.status , n.time , u.avator ,u.sex ,u.name FROM (select * from new_friends order by time desc) as n  inner join  user_info as u on n.from_user = u.id  WHERE  n.to_user = ? group by  n.from_user';
  return query(_sql,[user_id])
}
//添加我的新好友通知
let insertNewFriends = function(arr) {
  console.log('insertNewFriendsmol22222')
  const _sql =
    "insert into new_friends(from_user,to_user,content,time,status) values(?,?,?,?,?);";
  return query(_sql, arr);
};

let updateNewFriends = function (from_user,to_user) {
  const _sql ='UPDATE new_friends SET status = 1  WHERE from_user = ? AND to_user = ?';
  return query(_sql,[from_user,to_user])
}



module.exports = {
  getnewFriends,
  insertNewFriends,
  updateNewFriends
};
