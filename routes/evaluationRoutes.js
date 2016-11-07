'use strict'
var express = require('express');
var router = express.Router();
// const routes = require('express').Router();

router.get('/evaluation', function(req, res) {
	console.log('evaluation')
	template.find(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({evaluationRoutes: evaluation});
	})
});

module.exports = router;