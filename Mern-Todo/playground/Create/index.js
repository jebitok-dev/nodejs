var fs = require('fs');

// fs.appendFile('index.txt', 'Hello Content!', function(err) {
//     if(err) throw err;
//     console.log('Saved!');
// });

// fs.open('index.txt', 'w', function(err, file) {
//     if(err) throw err;
//     console.log('Saved');
// });

fs.writeFile('index.txt', 'Hello Content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});