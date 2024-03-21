var j=require('./college');
console.log('hello'+j.name);
console.log("\n")

// core modules
const path=require("path");
console.log("my hostname is:",path.basename(__filename));
console.log("my directory is:",path.dirname(__filename));
console.log("my extension is:",path.extname(__filename));
console.log("single line properties:",path.parse(__filename).base);
console.log("\n")

const od=require("os");
console.log("My platform is",od.platform());
console.log("My architecture is",od.arch());
console.log("My total memory is",od.totalmem());
console.log("My free memory is",od.freemem());
console.log("My home directory is",od.homedir());
console.log("\n")

const url=require('url');
const myurl=new URL("https://rguktsklm.ac.in/")
console.log("my url is",myurl.href);
console.log("my host is",myurl.host);
console.log("my hostname is",myurl.hostname);
console.log("my pathname is",myurl.pathname);
console.log("my search is",myurl.search);
