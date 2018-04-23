var {query} = require('../utils/db');


let findByID = function (user_id) {
  let _sql = 'SELECT id AS user_id, name ,sex ,avator,place ,website,github,intro,status,last_login  FROM user_info   WHERE  user_info.id =?  '
  return query(_sql,user_id)
}
//通过用户名查找用户信息 user_info
let findDataByName = function (name) {
  let _sql  = 'SELECT * FROM user_info WHERE name = ?'
  return query(_sql,name)
}

let findUIByName = function (name) {
  let _sql = 'SELECT id,name,sex,avator,place ,github FROM user_info where name= ?'
  return query(_sql,name)
}
let isFriend = function(user_id,other_user_id){
  console.log(other_user_id);
  let _sql = 'select * from user_user_relation u where u.user_id = ? and u.other_user_id = ?'
  return query(_sql,[user_id,other_user_id])
}
let findContact = function(user_id){
  let _sql = 'SELECT\n' +
    '\tr.user_id,\n' +
    '\ti. NAME,\n' +
    '\tr.remark,\n' +
    '\t(\n' +
    '\t\tSELECT\n' +
    '\t\t\tinitial\n' +
    '\t\tFROM\n' +
    '\t\t\tuser_info\n' +
    '\t\tWHERE\n' +
    '\t\t\tr.other_user_id = user_info.id\n' +
    '\t) AS initial,\n' +
    '\t(\n' +
    '\t\tSELECT\n' +
    '\t\t\tNAME\n' +
    '\t\tFROM\n' +
    '\t\t\tuser_info\n' +
    '\t\tWHERE\n' +
    '\t\t\tr.other_user_id = user_info.id\n' +
    '\t) AS other_name,\n' +
    '\t(\n' +
    '\t\tSELECT\n' +
    '\t\t\tsex\n' +
    '\t\tFROM\n' +
    '\t\t\tuser_info\n' +
    '\t\tWHERE\n' +
    '\t\t\tr.other_user_id = user_info.id\n' +
    '\t) sex,\n' +
    '(\n' +
    '\t\tSELECT\n' +
    '\t\t\tavator\n' +
    '\t\tFROM\n' +
    '\t\t\tuser_info\n' +
    '\t\tWHERE\n' +
    '\t\t\tr.other_user_id = user_info.id\n' +
    '\t) avator\n' +
    'FROM\n' +
    '\tuser_user_relation r\n' +
    'JOIN user_info i ON i.id = r.user_id\n' +
    'WHERE\n' +
    '\tr.user_id = ?\n' +
    ';';
  return query(_sql,user_id);
}

let addAsFriend = function (user_id,other_user_id,time) {
  const _sql =
    'insert into user_user_relation(user_id,other_user_id,time) values(?,?,?)';
  return query(_sql,[user_id,other_user_id,time]);
}


module.exports = {
  findDataByName,
  findUIByName,
  isFriend,
  findByID,
  findContact,
  addAsFriend
}
