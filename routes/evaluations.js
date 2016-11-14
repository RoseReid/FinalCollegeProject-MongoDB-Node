'use strict'
const express = require('express');
const router = express.Router();
const Evaluation = require('./../models/evaluations.js').Model;

router.get('/evaluations', function(req, res) {
	Evaluation.find(function (err, evaluation) {
		if (err) {
			return res.sendStatus(404);
		}
		res.json({evaluationSchema: evaluation});
	})
});

router.post('/evaluations', function(req, res) {
	var evaluationData = req.body;
	var evaluation = new Evaluation(evaluationData);
	evaluation.save(function (err, evaluationSaved) {
		if (err) {
			console.log(err);
			return res.sendStatus(404);
		}
		res.json(evaluationSaved);
	})
});


router.put("/evaluations/:id", function(req,res){
  var evaluationData = req.body;

  Evaluation.findById(req.params.id, function(err, evaluation){
    if (err){
      console.log(err)
      return res.sendStatus(404);
    }else{
      evaluation.set(evaluationData);
      evaluation.save(function(err, evaluationSaved){
        if (err){
          console.log(err)
          return res.sendStatus(404);
        }else{
          res.json(evaluationSaved);
        }
      })
    }
});
});

router.delete("/api/evaluations/:id", function(req,res){
  var id = req.params.id;
  Evaluation.findById(id, function (err, evaluation) {
    Evaluation.findById(req.params.id, function(err, evaluation){
    if (err){
      console.log(err)
      return res.sendStatus(404);
    }else{
      evaluation.remove(function(err, evaluationRemoved){
        if (err){
          console.log(err)
          return res.sendStatus(404);
        }else{
          res.json(evaluationRemoved);
        }
      });
    }
    });
  });
});

module.exports = router;
