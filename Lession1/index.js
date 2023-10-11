const app=require('./app');
const port=3330;

app.listen( port , () =>{
    console.log(`My server is http://localhost:${port}`)
})