//require the built-in http node module 
const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    // res.write('Hello world!');
    res.end('Hello world!');
    
    console.log('Successsful!')
}).listen(8080,()=>{
    console.log('Server running on port: 8080');
});