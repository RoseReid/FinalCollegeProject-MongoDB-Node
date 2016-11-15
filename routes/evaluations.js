'use strict'
const express = require('express');
const router = express.Router();
const Evaluation = require('./../models/evaluations.js').Model;


router.post('/evaluations', function(req, res) {
	var evaluationData = req.body;
  console.log(req);
	var evaluation = new Evaluation(evaluationData);
	evaluation.save(function (err, evaluationSaved) {
		if (err) {
			console.log(err);
			return res.sendStatus(404);

		}
		res.json(evaluationSaved);
	})
});

router.get('/evaluations', function(req, res) {
  Evaluation.find(function (err, evaluation) {
    if (err) {
      return res.sendStatus(404);
    }
    res.json({evaluationSchema: evaluation});
  })
});

router.get('/evaluations/peer-evaluations', function(req, res){
  Evaluation.find({"ninja.name": req.query.name})
  .select({"client.name": req.query.name})
  .sort({dateSaved: -1, client: -1})
  .limit(parseInt(req.query.limit))
  .exec(function(err, client){
  res.json({client});
  })
});

// http://localhost:3000/evaluations/peer-evaluations/?name=Apple&limit=2



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

router.delete("/evaluations/:id", function(req,res){
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
