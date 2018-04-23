const db = {
  host:'127.0.0.1',
  port:'3306',
  database:'airchat',
  user:'root',
  password:'123456'
}
const baseApi = 'api/t1'

const secret = 'kentchat';
module.exports = {
  db,
  baseApi,
  secret
}
