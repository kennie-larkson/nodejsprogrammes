const http = require('http');
const url = require('url');


http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    var query = url.parse(req.url,true).query; // splits the query string into readable parts
    var txt = query.year +" "+ query.month;
    res.end(txt);
}).listen(8080);