'use strict'
const LintStream = require('jslint').LintStream;

const express = require('express');
const app = express();

const evaluations = require('./routes/evaluations.js');
const templates = require('./routes/templates.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const watch = require('node-watch');
mongoose.Promise = require('q').Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.send("Hooray, the server is working");
});

//look into
app.use('/evaluations', evaluations);
app.use('/templates', templates);
app.use(errorHandler);


function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
        error: err
    });
    console.log(err);
}

app.listen(3000, function() {
    console.log('Server started at port 3000');
});