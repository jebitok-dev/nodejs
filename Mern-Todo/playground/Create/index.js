var fs = require('fs');

fs.appendFile('index.txt', 'Hello Content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});