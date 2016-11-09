'use strict'

const routes = require('express').Router();



routes.get('/template', function(req, res) {
	template.find(function (err, template) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({templateRoutes: template});
	})
		console.log('template');
});

module.exports = routes;