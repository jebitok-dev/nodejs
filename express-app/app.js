const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', {title2: 'some title2'})
})

app.get('/add-item', (req, res) => {
    res.render('add-item')
})

app.use((req, res) => {
    res.render('error')
})