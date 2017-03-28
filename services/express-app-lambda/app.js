'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
      message: 'hello world!'
    });
});

// app.listen(3000) // <-- comment this line out from your app

module.exports = app // export your app so aws-serverless-express can use it
