'use strict'

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected template')
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



// {

//   "question": [
//     {
//       "type": "cat questasdfasdfdsions",
//       "text": "casdfasdat question text"
//     }
//   ]
// }