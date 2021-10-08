const fs = require('fs')

const readStream = fs.createReadStream('largetext.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('writeStream.txt');
// readStream.on('data', chunk => {
//     console.log('### new chunk ###')
//     console.log(chunk)

//     writeStream.write('\n ####new chunk#####\n');
//     writeStream.write(chunk)
// }) 
// stream.pipe()
readStream.pipe(writeStream)