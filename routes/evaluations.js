'use strict'
const express = require('express');
const router = express.Router();
const evaluation = require('./../controllers/evaluation.js');




//router.route('/evaluations')
	

	router.get('/',evaluation.getEvals);

	router.get('/peer-evaluations',evaluation.getNinjasClients);
	//save email instead

	router.put('/',evaluation.updateEval);

	router.post('/',evaluation.createEval);
	 //name and email into the headers

	router.delete('/:id',evaluation.deleteEval);

module.exports = router;