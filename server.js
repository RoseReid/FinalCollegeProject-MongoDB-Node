'use strict'
const express = require('express');
const app = express();

const evaluations = require('./routes/evaluations.js');
const templates = require('./routes/templates.js');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('<form method=“post” action=“/evaluations”><input name="foo" type=“text” /><input type=“submit”></form>');
});


app.use('/', evaluations);
app.use('/', templates);


app.listen(3000, function () {
  console.log('Server started at port 3000');
});
