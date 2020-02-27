const http = require('http');
const uc = require('upper-case');

http.createServer((req,res)=>{
    const txt = "Hello world!";
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(uc.upperCase(txt));
    res.end;
}).listen(8080);