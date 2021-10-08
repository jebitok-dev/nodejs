const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/html');

   let route = "./views/"

    switch(req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }

   fs.readFile(route, (err, data) => {
       if(err) {
           console.log(err)
           res.end()
       } else {
           res.end(data);
       }
    })
});

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})