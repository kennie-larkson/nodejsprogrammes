//require the built-in http node module 
const http = require('http');
const date = require('./myfirstmodule');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('This current date and time are '+''+ date.myDateTime());
    // res.write('Hello world!');
    res.end('Hello world!');
    
}).listen(8080,()=>{
    console.log('Server running on port: 8080');
});