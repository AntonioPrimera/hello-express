const express = require('express');

const port = 3000;
var app = express();

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(port, () => {console.log(`Server started on port ${port}`);})