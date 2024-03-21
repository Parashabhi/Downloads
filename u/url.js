const url=require('url');
const myurl=new URL("https://www.rguktsklm.ac.in:8080/careers/jv.html?id=535");
console.log("my url is",myurl.href);
console.log("my host is",myurl.host);
console.log("my path is",myurl.pathname);
console.log("my hostname is",myurl.hostname);
console.log("my querystring is",myurl.search);

