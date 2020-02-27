//this program deletes (unlink) an existing file in the file system
//here the file demofile2.html was an existing file which this program gets
//to delete from the directories

const http = require('http'),
fs = require('fs');

http.createServer((req, res)=>{ 
    fs.unlink('demofile2.html',(err)=>{
        // if(err) throw err;
        res.end();
    });
}).listen(8080);