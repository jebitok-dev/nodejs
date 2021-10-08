const http = require('http');
const port = 8080
const hostname = 'localhost'

const server = http.createServer((req, res) => {
   console.log('A request is made') 
})

server.listen(port, hostname, () => {
    console.log(`listening on port ${port}`)
})