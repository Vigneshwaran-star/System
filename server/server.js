const express =require('express');
const app=express();
const mongoose=require('mongoose');
const Port=3000
require('dotenv').config();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('welcome to System')
})
app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`)
})