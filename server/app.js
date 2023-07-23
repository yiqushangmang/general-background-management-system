

const express=require("express");
const app=express()
const port="3000";

const bodyParser=require("body-parser");

const cors=require("cors")



app.use(cors())
/* 当 extended 为false时，值为数组或者字符串,当为TRUE时，值可以为任意类型 */
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    // status=0成功,1为失败 默认为1
    res.cc=(err,status=1)=>{
        res.send({
            status,
            message:err instanceof Error?err.message:err
        })
    }
    next()
}) 
const jwtconfig =require("./jwt_config/index")

const {expressjwt:jwt}=require("express-jwt")
const loginRouter=require("./router/login");
const Joi = require("joi");
app.use(jwt({
    secret:jwtconfig.jwtSecretKey,algorithms:['HS256']
}).unless({
    path:[/^\/api\//]
}))

app.use("/api",loginRouter)
/*  对不符合joi进行报错*/

app.use((req,res,next)=>{
  if(err instanceof Joi.ValidationError) return res.cc(err)
}) 
app.listen(port,(req,res)=>{
    console.log(`running in http://127.0.0.1:${port}`);
})