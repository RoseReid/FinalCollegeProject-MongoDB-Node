'use strict'
const express = require('express');
const app = express();


const template = require('./models/templates.js').Model;
const evaluation = require('./models/evaluations.js').Model;


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('Test Hello, I am working!');
});


app.get('/evaluations', function(req, res) {
	evaluation.find(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({evaluationSchema: evaluation});
	})
});

app.get('/templates', function(req, res) {
	template.find(function (err, template) {

		if (err) {
			return res.sendStatus(404);
		}
		res.json({templateSchema: template});
	})
});

app.post('/evaluations', function(req, res) {
	evaluation.save(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json(evaluation);
	})
});

app.post('/templates', function(req, res) {
	template.save(function (err, template) {

		if (err) {
			return res.sendStatus(404);
		}
		res.json(req.body);
	})
});


app.listen(3000, function () {
  console.log('Server started at port 3000');
});
