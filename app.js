const fs = require('fs')
// Read File
// fs.readFile('./ckmobile/note.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data.toString())
//     }
// })

// Write File
// fs.writeFile('./ckmobile/note.txt', 'A new message', (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('A new message created')
//     }
// })

fs.appendFile('./ckmobile/note.txt', 'A new Message 2\r\n', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log('A new message created')
    }
})