const mysql=require("mysql")
// 创建与数据库的连接
const DB=mysql.createPool({
    host:"localhost",
    user:"yeziliu",
    password:"123456",
    database:"yeziliu"
})

module.exports=DB