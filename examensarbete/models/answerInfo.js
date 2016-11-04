'use strict';

const ninjaInfo = require('./ninjaInfo.js');
const questionInfo = require('./questionInfo.js');
const clientInfo = require('./clientInfo.js');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('connected answerInfo')
//   // we're connected!
// });

const answerInfoSchema = new mongoose.Schema({
	happyFace: {type:String, required:true},
	mehFace: {type:String, required:true},
	sadFace: {type:String, required:true},
	ninja: [{type: mongoose.Schema.Types.ObjectId, ref: 'ninjaInfo'}],
	client: [{type: mongoose.Schema.Types.ObjectId, ref: 'clientInfo'}],
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'questionInfo'}],
	dateSaved: { type: Date, required: true, default: Date.now}
});

exports.Model = db.model('answerInfo', answerInfoSchema);


