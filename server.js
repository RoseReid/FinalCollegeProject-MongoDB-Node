const express = require('express');
const app = express();


const template = require('./models/template.js').Model;
const evaluation = require('./models/evaluation.js').Model;

const evaluationRoutes = require('./routes/evaluationRoutes.js');
const templateRoutes= require('./routes/templateRoutes.js');


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('Test Hello, I am working!');
});


app.use('/', templateRoutes);

app.use('/', evaluationRoutes);




app.listen(3000, function () {
  console.log('Server started at port 3000');
});
