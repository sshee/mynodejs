const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
 const url = req.url;
 const method = req.method;
 if(url === '/'){
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Request Page</title></head>');
    res.write('<body><form action="/Message" method ="POST"><input type="text"></input><button tyep ="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
 }
 if(url === '/Message' && method ==='POST'){
     fs.writeFileSync('Message1.txt','Hello');
     res.statusCode = 302;
     res.setHeader('Location','/');
     return res.end();
 }
    res.write('<html>');
    res.write('<head><title>My Request Page</title></head>');
    res.write('<body><h1>Hello from node JS</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);