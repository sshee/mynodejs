const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><h1>Welcome to the request route page</h1></head>');
    
    res.write('<body>');
    res.write('<h2></h2>');
    res.write('<form action="/create-user", method="POST"><input type="text", name="username"></input><button type="submit">Submit</button></form>');
    
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/users'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><h1>Users</h1></head>');  
    res.write('<body>');
    res.write('<h2><ul><li>Shatabdi</li><li>Sabita</li></ul></h2>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(url === '/create-user'){
    const body = [];
    req.on('data', (item)=>{
      body.push(item);
    });
    req.on('end', () => {
      console.log(JSON.stringify(body));
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
      return res.end();
    });
  }
};
module.exports = requestHandler;