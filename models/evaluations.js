'use strict'

//repetitive code 
const mongoose = require('mongoose');

//get url from NODE_ENV
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
	name: {type:String, required:true}
});


const answer = new mongoose.Schema({

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

evaluationSchema.statics.getNinjasClients = function(ninjaEmail, limit){
	return this.find({"ninja.email": ninjaEmail})
	  .limit(parseInt(limit))
	  .select('ninja.name')
	  .select('dateSaved client.name client._id')
	  .sort({dateSaved: 'desc'})
	  .exec()
}

exports.Model = db.model('evaluation', evaluationSchema);



 // {
 // 	"ninja": {
 // 		"name": "Jack",
 // 		"email": "Jack@email.com"
 // 	},
 // 	"client": {
 // 		"name": "Jack Client"
 // 	},
 // 	"answers": [{
 // 		"grade": "sad",
 // 		"question": {
 // 			"type": "JackType",
 // 			"text": "JackText"
 // 		}
 // 	}]
 // }