const http = require('http'),
fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    fs.writeFile('demofile2.html',`<p>Here's the new data</p>`,(err)=>{
        if(err) throw err;
        fs.readFile('demofile2.html',(err, data)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    });
}).listen(8080);