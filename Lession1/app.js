const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(`Hello world`);
})
app.use((req,res)=>{
    res.send(`<h1>404 & Not found Page</h1>`)
})
module.exports=app