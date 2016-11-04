const express = require('express');
const app = express();


const template = require('./models/template.js').Model;
const evaluation = require('./models/evaluation.js').Model;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('Test Hello, I am working!');
});



app.get('/template', function(req, res) {
	template.find(function (err, template) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({template: template});
	})
});

app.get('/evaluation', function(req, res) {
	console.log('evaluation')
	evaluation.find(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({evaluation: evaluation});
	})
});




app.listen(3000, function () {
  console.log('Server started at port 3000');
});
