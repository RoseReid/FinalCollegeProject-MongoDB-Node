'use strict';

const mongoose = require('mongoose');

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

//exports.Model = db.model('template', templateSchema);
module.exports = mongoose.model('Template', templateSchema);

// {

//   "question": [
//     {
//       "type": "cat questasdfasdfdsions",
//       "text": "casdfasdat question text"
//     }
//   ]
// }
