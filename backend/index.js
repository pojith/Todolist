const express=require('express')
const app=express();
const {user,p1} = require("./model/user")
const connect=require('./connections/connection')
require('dotenv').config();
connect()
p1()


app.listen(process.env.PORT=3000,()=>{
    console.log("listen")
})