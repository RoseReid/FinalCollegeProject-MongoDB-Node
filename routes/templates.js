'use strict'
const express = require('express');
const router = express.Router();
const Template = require('./../models/templates.js').Model;

router.get("/templates", function(req, res) {
	Template.find(function (err, template) {

		if (err) {
			return res.sendStatus(404);
		}
		res.json({templateSchema: template});
	})
});


router.post("/templates", function(req, res) {
	var templateData = req.body;
	var template = new Template(templateData);
	template.save(function (err, templateSaved) {

		if (err) {
			return res.sendStatus(404);
		}
		res.json(templateSaved);
	})
});

router.put("/templates/:id", function(req,res){
  var templateData = req.body;

  Template.findById(req.params.id, function(err, template){
    if (err){
      console.log(err)
      return res.sendStatus(404);
    }else{
      template.set(templateData);
      template.save(function(err, templateSaved){
        if (err){
          console.log(err)
          return res.sendStatus(404);
        }else{
          res.json(templateSaved);
        }
      })
    }
});
});

router.delete("/templates/:id", function(req,res){
  var id = req.params.id;
  Template.findById(id, function (err, template) {
    Template.findById(req.params.id, function(err, template){
    if (err){
      console.log(err)
      return res.sendStatus(404);
    }else{
      template.remove(function(err, templateRemoved){
        if (err){
          console.log(err)
          return res.sendStatus(404);
        }else{
          res.json(templateRemoved);
        }
      });
    }
    });
  });
});

module.exports = router;