// web modules
const http=require('http');
http.createServer((req,res)=>{
   res.writeHead(200,{'content-type':'text/plain'});
   res.write("welcome to node js");
   res.end()

}).listen(4321)
