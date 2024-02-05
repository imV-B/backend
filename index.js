require('dotenv').config();

const express = require('express');

const app = express();
const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Home route")
})

app.get('/login',(req,res)=>{
    res.send("Please login into application")
})

app.listen(PORT,()=>{
    console.log(`Express app is listening on post ${PORT}`);
})

