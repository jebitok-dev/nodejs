var fs = require('fs');

// fs.appendFile('index.txt', ' This is my text.', function(err) {
//     if(err) throw err;
//     console.log('Updated!');
// });

// fs.writeFile('index.txt', 'This is my text', function(err) {
//     if(err) throw err;
//     console.log('Replaced!');
// });

fs.rename('index.txt', 'mindex.txt', function(err) {
    if(err) throw err;
    console.log('File Renamed!');
});