const http = require('http');

const server = http.createServer((req,res) => {
  const url = req.url;
  if(url === '/'){
      res.setHeader('Content-type', 'text/html');
      res.write('<html>');
        res.write('<head><title>Enter Request</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"></input><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
  }
  res.setHeader('Content-type', 'text/html');    
  res.write('<html>');
        res.write('<head><title>Enter Request</title></head>');
        res.write('<h1>Hello from node.js</h1>');
      res.write('</html>');
      res.end();
});
      
server.listen(2000);