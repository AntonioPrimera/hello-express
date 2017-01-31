const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {});
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        "pageTitle": "Projects"
    })
});

app.listen(port, () => {console.log(`Server started on port ${port}`);})