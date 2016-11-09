'use strict';

const question = require('./template.js');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected evaluation')
});

const ninjaSchema = new mongoose.Schema({
	name: {type:String, required:true},
	email: {type: String, set: toLower, required: true}
});

const clientSchema = new mongoose.Schema({
	name: {type:String, required:true},
});

//change to grade
const scale = {
	//use number to identify the happyFace .....
	0: {type:Boolean, required:true},
	1: {type:Boolean, required:true},
	2: {type:Boolean, required:true},
	template: {type:String, required:true}
};

const evaluationSchema = new mongoose.Schema({
	//answers a better word and answers should contain a collection with tupples containing question and answer.

	answers: {type: scale, required: true},
	ninja: {type: ninjachema, required: true},
	client: {type: clientSchema, required: true} 
}, {timestamps: {updatedAt: "dateSaved"}
);

exports.Model = db.model('evaluation', evaluationSchema);


