//Include the HTTP module
const http = require('http');

//create a server object with the http createServer object
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(req.url);// responds with the part of the url that comes after the domain name
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

// visit localhost:8080/summer
//this code will produce the result /summer