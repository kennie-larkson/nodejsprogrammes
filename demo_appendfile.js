//using fs.appendFile() to append a specified content to a file
//if the file doesn't exist it is created

const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.appendFile('demofile2.html','Hello content',(err)=>{
        if(err) throw err;
        
        fs.readFile('demofile2.html',(err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
        
        // console.log('Saved');
        // res.end();
    });
}).listen(8080);