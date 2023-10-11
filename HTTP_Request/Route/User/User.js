const express=require('express');
const route=express.Router();

route.get('/',(req,res)=>{
    res.send("<h1>This is user Home page</h1>")
})
route.get('/:id([0-9]+)',(req,res)=>{
    res.send(`The id is ${req.params.id}`)

})
route.get('/:title([a-zA-Z0-9]+)',(req,res)=>{
    res.send(`The title is ${req.params.title}`)

})
route.post('/resister',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email
    res.send(`name: ${name} email: ${email}`)
    
})

module.exports=route;