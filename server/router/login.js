const express=require("express");

const router =express.Router()

const loginHandle=require("../router_handle/login")
const expiressJoi=require("@escook/express-joi")
const {login_limit} =require("../limit/login")
router.post("/register",expiressJoi(login_limit) , loginHandle.register)
router.post("/login",expiressJoi(login_limit) ,loginHandle.login)
module.exports=router