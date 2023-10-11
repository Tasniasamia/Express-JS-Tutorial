const express=require('./app');
const Port=4000;

express.listen(Port,()=>{
    console.log(`My Server is http://localhost:${Port}`)
})