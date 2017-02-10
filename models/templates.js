'use strict';

const mongoose = require('mongoose');

// get url from NODE_ENV
const url = 'mongodb://localhost:27017/myEvaluations';
var db = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('mongoose open & connected templates');
});
db.once('close', function () {
   console.log("Closed mongoose-templates");
});

const question = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const templateSchema = new mongoose.Schema({
  question: {
    type: [question],
    required: true
  }
});

exports.Model = db.model('template', templateSchema);

