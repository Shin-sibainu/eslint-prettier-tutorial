// console.log('Hello World');

const http = require('http');

const name = 'world';
// const sample = 'Hello_Wolrd';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello, ' + name + '!');
    res.end();
    return;
  }

  res.write('This is a another endpoint');
  res.end();
});
server.listen(3000)
console.log('Server running on port 3000');
