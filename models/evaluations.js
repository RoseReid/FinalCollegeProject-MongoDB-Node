'use strict';



const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected evaluation')
});

const ninjaSchema = new mongoose.Schema({
	name: {type:String, required:true},
	email: {type: String, lowercase: true, required: true}
});

const clientSchema = new mongoose.Schema({
	name: {type:String, required:true},
});


const answer = new mongoose.Schema({
	//use number to identify the happyFace .....
	// 0: {type:Boolean, required:true},
	// 1: {type:Boolean, required:true},
	// 2: {type:Boolean, required:true},
	grade:{type:String, enum:['sad', 'meh', 'happy']},
	question: {
		type: {type: String, required: true},
		text: {type: String, required: true}
	}
});

const evaluationSchema = new mongoose.Schema({
	//answers a better word and answers should contain a collection with tupples containing question and answer.

	answers: {type: [answer], required: true, default:[]},
	ninja: {type: ninjaSchema, required: true},
	client: {type: clientSchema, required: true} 
}, {timestamps: {updatedAt: "dateSaved"}
});

exports.Model = db.model('evaluation', evaluationSchema);


