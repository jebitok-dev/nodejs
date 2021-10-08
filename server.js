const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');
   fs.readFile('./view/index.html', (err, data) => {
       if(err) {
           console.log(err)
           res.end()
       } else {
           res.write(data);
           res.end();
       }
    })
});

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})