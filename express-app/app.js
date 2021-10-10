const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p>Home Page</p>')
})

app.get('/add-item', (req, res) => {
    res.send('<p>Add Item</p>')
})