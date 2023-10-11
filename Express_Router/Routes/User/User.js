const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send("This is user Home Router")
})
route.get('/user',(req,res)=>{
    res.send("This is user List")
})



module.exports=route