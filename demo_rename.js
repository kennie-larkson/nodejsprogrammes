const http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{

    fs.rename('demofile1.html', 'myrenamedfile.html', (err)=> {
        if (err) throw err;
        fs.readFile('myrenamedfile.html',(err,data)=>{
            if(err)  throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
        // console.log('File Renamed!');
        res.end();
        });
        
      });
}).listen(8080);
