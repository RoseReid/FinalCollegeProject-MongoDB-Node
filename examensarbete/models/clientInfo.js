'use strict';


const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myEvaluations';
var db  = mongoose.createConnection(url);


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('connected client')
//   // we're connected!
// });


const clientInfoSchema = new mongoose.Schema({
	clientName: {type:String, required:true},
});

exports.Model = db.model('clientInfo', clientInfoSchema);


