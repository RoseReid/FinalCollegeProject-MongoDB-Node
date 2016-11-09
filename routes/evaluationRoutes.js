'use strict'
const routes = require('express').Router();


routes.get('/evaluation', function(req, res) {
	console.log('connected to evaluation')
	template.find(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({evaluationRoutes: evaluation});
	})
});

module.exports = routes;