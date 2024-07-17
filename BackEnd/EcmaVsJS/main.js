// do "type": "module",
// const { createServer } = require('node:http');
// import http from "http"  // modern syntax
// import {a, b} from "./mymodule.js"
// console.log(a, b);

// import obj from"./mymodule.js"
// console.log(obj);

import kunal from "./mymodule.js"
console.log(kunal);

// remove "type": "module",
// import kunal from "./mymodule.js" // give error
// console.log(kunal);

// const a = require("./mymodule2.js")
// console.log(a);


// (function(exports, require, module, __filename, __dirname){
    
// });








// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
