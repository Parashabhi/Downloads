const http=require('http');
const hostname='127.0.0.1';
const port=4231;
const fs=require('fs');
fs.readFile('first.html',(err,data)=>{
    if(err) throw err;
    const Server=http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html');
        res.write(data);
        res.end();
    })
    Server.listen(port,hostname,()=>{console.log("Server started at port number:",port)})
})
