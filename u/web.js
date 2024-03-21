const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'constant-type':'text/plain'});
    res.write("Welcome to nodejs server");
    res.end();
}).listen(4231)//4231 is a port number