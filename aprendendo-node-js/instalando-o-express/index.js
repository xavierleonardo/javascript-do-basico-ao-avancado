const { createServer } = require('http');

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`
    <h1>Hello World!</h1>
    <p>Primeira página com Node.js</p>
  `);
  response.end();
});

server.listen(8000);

console.log('Ouvindo o porta 8000');
