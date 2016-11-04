'use strict';


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('connected question')
//   // we're connected!
// });

const question1Schema = new mongoose.Schema ({
		questionType: {type:String, required:true},
		questionText: {type:String, required:true}
	});

const question2Schema = new mongoose.Schema ({
		questionType: {type:String, required:true},
		questionText: {type:String, required:true}
	});

const question3Schema = new mongoose.Schema ({
		questionType: {type:String, required:true},
		questionText: {type:String, required:true}
	});

const question4Schema = new mongoose.Schema ({
		questionType: {type:String, required:true},
		questionText: {type:String, required:true}
	});

const question5Schema = new mongoose.Schema ({
		questionType: {type:String, required:true},
		questionText: {type:String, required:true}
	});


const questionInfoSchema = new mongoose.Schema({
	question1: [question1Schema],
	question2: [question2Schema],
	question3: [question3Schema],
	question4: [question4Schema],
	question5: [question5Schema]

});

exports.Model = db.model('questionInfo', questionInfoSchema);
exports.Model = db.model('question1', question1Schema);
exports.Model = db.model('question2', question2Schema);
exports.Model = db.model('question3', question3Schema);
exports.Model = db.model('question4', question4Schema);
exports.Model = db.model('question5', question5Schema);




