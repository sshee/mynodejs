const http = require('http');
const route = require('./routes.js');
const server = http.createServer(route.handler);
console.log(route.someText);
server.listen(3000);