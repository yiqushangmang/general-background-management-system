const DB=require('../db/index');
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken")
const jwtconfig=require('../jwt_config/index');

exports.register=(req,res)=>{
    const reginfo=req.body
    if(!reginfo.account||!reginfo.password){
      return res.send({
        status:1,
        message:"账号或密码不能为空"
      })  
    }
    let sql ='select * from users where account = ?'
    DB.query(sql,reginfo.account,(err,results)=>{
        if(results.length>0){
        return res.send({
            status:1,
            message:"账号已存在"
        })
        }

        reginfo.password=bcrypt.hashSync(reginfo.password,10)
        const sql1=`insert into users set ?`
        const identity="用户"
        const create_time=new Date();
        DB.query(sql1,{
            account:reginfo.account,
            password:reginfo.password,
            identity,
            create_time,
            status:0
        },(err,results)=>{
            console.log(results,8888);
            if(results.affectedRows!==1){
                return res.send({
                    status:1,
                    message:"注册账号失败"
                })
            }
           res.send({
            status:1,
            message:"注册账号成功"
           })
        })
    })
}



exports.login=(req,res)=>{
    const logininfo= req.body
    const sql="select * from users where account=?"
    DB.query(sql,logininfo.account,(err,results)=>{
         if(err) return res.cc(err)
         if(results.length!=1) return res.cc('登录失败')
         const compareResult=bcrypt.compareSync(logininfo.password,results[0].password)
         if(!compareResult){
            return res.cc("登录失败")
         }
         if(results[0].status==1){
            return res.cc("账号被冻结")
         }
         const user={
            ...results[0],
            password:'',
            imageUrl:"",
            create_time:"",
            update_time:''
         }
         const tokenStr=jwt.sign(user,jwtconfig.jwtSecretKey,{
            expiresIn:'7h'
         })
         res.send({
            results:results[0],
            status:0,
            message:"登录成功",
            token:"Bearer "+tokenStr    
         })
    })
}