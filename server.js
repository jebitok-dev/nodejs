const http = require('http');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
   console.log('request url', req.url) 
   console.log('request method', req.method);
})

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})