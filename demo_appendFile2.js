const http = require('http'),
fs = require('fs');

http.createServer((req,res)=>{
    fs.appendFile('demofile2.html',`<p>A new data text</p>`,(err)=>{
        if(err) throw err;
        fs.readFile('demofile2.html',(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
        });
        
    });
}).listen(8080);