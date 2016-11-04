'use strict';


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected template')
});

const templateInfoSchema = new mongoose.Schema ({
		templateType: {type:String, required:true},
		templateText: {type:String, required:true}
	});


const templateSchema = new mongoose.Schema({
	template1: {type: templateInfoSchema, required:true},
	template2: {type: templateInfoSchema, required:true},
	template3: {type: templateInfoSchema, required:true},
	template4: {type: templateInfoSchema, required:true},
	template5: {type: templateInfoSchema, required:true}

});

exports.Model = db.model('template', templateSchema);
// 




