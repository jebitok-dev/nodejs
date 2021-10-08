const http = require('http');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');
   res.write('<body class="app"></body>');
   res.write('<h1>Welcome to ckmobile</h3>');
   res.write('<p>This is Node.js course</p>');
   res.end();
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})