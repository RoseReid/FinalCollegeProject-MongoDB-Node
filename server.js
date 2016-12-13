'use strict';

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myEvaluations');
mongoose.Promise = require('q').Promise;
//const url = 'mongodb://localhost:27017/myEvaluations';
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//console.log('connected template');
//});

const evaluations = require('./routes/evaluations.js');
const templates = require('./routes/templates.js');
const bodyParser = require('body-parser');

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
