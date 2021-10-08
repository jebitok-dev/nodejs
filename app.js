const fs = require('fs')

const readStream = fs.createReadStream('largetext.txt')
readStream.on('data', chunk => {
    console.log('### new chunk ###')
    console.log(chunk.toString())
}) 