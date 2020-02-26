//require the built-in http node module 
const http = require('http');


http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('Hello world!');
    
}).listen(8080,()=>{
    console.log('Server running on port: 8080');
});