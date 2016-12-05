'use strict';

const express = require('express');
const app = express();

const evaluations = require('./routes/evaluations.js');
const templates = require('./routes/templates.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hooray, the server is working');
});

app.use('/evaluations', evaluations);
app.use('/templates', templates);
app.use(errorHandler);

function errorHandler (err, req, res, next) {
  res.status(err.status || 500).send({
    error: err
    });
};

app.listen(3000, function () {
  console.log('Server started at port 3000');
});
