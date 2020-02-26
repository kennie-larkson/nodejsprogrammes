//Include the HTTP module
const http = require('http');

//create a server object with the http createServer object
http.createServer((req, res)=>{
    //
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World!');//write a response to client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080