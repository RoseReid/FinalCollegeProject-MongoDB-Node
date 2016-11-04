const express = require('express');
const app = express();


//const mongoose = require('mongoose');
//mongoose.connect('localhost:27017/ninjaClientEvaluations', {});


const clientInfo = require('./models/clientInfo.js').Model;
const ninjaInfo = require('./models/ninjaInfo.js').Model;
const questionInfo = require('./models/questionInfo.js').Model;
const answerInfo = require('./models/answerInfo.js').Model;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// app.use('/', express.static('./public'));


app.get('/', function (req, res) {
  res.send('Test Hello, I am working!');
});



app.get('/clientInfo', function(req, res) {
	clientInfo.find(function (err, clientInfo) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({clientInfo: clientInfo});
	})
});

app.get('/ninjaInfo', function(req, res) {
	ninjaInfo.find({},function (err, ninjaInfo) {
		if (err) {
			return res.sendStatus(404);
		}
		console.log('ninjaInfo', ninjaInfo)
		res.json({ninjaInfo: ninjaInfo});
	})
});

app.get('/questionInfo', function(req, res) {
	questionInfo.find(function (err, questionInfo) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({questionInfo: questionInfo});
	})
});

app.get('/answerInfo', function(req, res) {
	console.log('answerInfo')
	answerInfo.find(function (err, answerInfo) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({answerInfo: answerInfo});
	})
});




app.listen(3000, function () {
  console.log('Server started at port 3000');
});
