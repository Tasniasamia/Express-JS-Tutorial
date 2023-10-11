const express=require('express');
const app=express();
const useRoute=require('./Route/User/User')
var bodyParser = require('body-parser')
console.log("bodyParser",bodyParser)
console.log(app);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/user',useRoute)
app.use('/AddInfo',(req,res)=>{
    res.sendFile(__dirname+"/View/index.html")
})
app.use((req,res)=>{
    res.send("<h1>Not Found and 404 Page</h1>")
})
module.exports=app