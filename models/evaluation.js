'use strict';

const question = require('./template.js');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected evaluation')
});

const ninjaInfoSchema = new mongoose.Schema({
	ninjaName: {type:String, required:true},
});

const clientInfoSchema = new mongoose.Schema({
	clientName: {type:String, required:true},
});

//change to grade
const evaluation = {
	happyFace: {type:Boolean, required:true},
	mehFace: {type:Boolean, required:true},
	sadFace: {type:Boolean, required:true},
	question: {type:String, required:true}
};

const evaluationSchema = new mongoose.Schema({
	evaluation: {type: evaluation, required: true},
	ninja: {type: ninjaInfoSchema, required: true},
	client: {type: clientInfoSchema, required: true} 
}, {timestamps: {updatedAt: "dateSaved"}});

exports.Model = db.model('evaluation', evaluationSchema);


