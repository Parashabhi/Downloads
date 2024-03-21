const express=require('express');
const app=express();
const port=4231;
app.use(express.json());
app.get('/',(req,res)=>{
res.send("working with restful api default");
})
let books=[
{
id:"101",
title:"wt",
author:"robert w sebesta"
},
]
app.get('/bookslist',(req,res)=>{
res.json(books);
})
app.listen(port,()=>console.log("server starting at port number",port));
