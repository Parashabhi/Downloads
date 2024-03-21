const path=require('path');
console.log("my basename is:",path.basename(__filename));
console.log("my directory is:",path.dirname(__filename));
console.log("my extension is:",path.extname(__filename));
console.log("single line properties:",path.parse(__filename).base);

