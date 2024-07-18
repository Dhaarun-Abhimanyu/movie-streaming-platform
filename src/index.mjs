import express from 'express';


const app=express();

const port=3000;


app.listen(port,()=>{
    console.log("running on port 3000");
});


app.get("/",(request,res)=>{
    res.send('hello wodgdfghdfhrld');
})