const express=require('express');
const apiapp=express();

const user=require('./Routes/User/User')
apiapp.use('/api/user',user);






 apiapp.use('/resister',(req,res)=>{
    
    // res.status(200).json(
    //     {
    //  message:"This is the resister page",
    //   status:200,}
    //  );
    res.cookie("name","Tasnia")
    res.cookie("age",22)
    res.redirect('/login')
    
    })
    apiapp.use('/login',(req,res)=>{
        res.statusCode=200
        res.sendFile(__dirname + "/View/login.html")
    
     })
     apiapp.get('/',(req,res)=>{
        res.statusCode=201
        res.append('Tasnia',"Still Women")
        res.sendFile(__dirname + "/View/index.html")
        
    })
    
     apiapp.use((req,res)=>{
        res.send("<h1>404 || NOt found page</h1>")
    })


module.exports=apiapp;