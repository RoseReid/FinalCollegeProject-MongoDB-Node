'use strict'
const express = require('express');
const router = express.Router();
const Evaluation = require('./../models/evaluations.js').Model;





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

router.get('/evaluations', function(req, res) {
  Evaluation.find(function (err, evaluation) {
    if (err) {
      return res.sendStatus(404);
    }
    res.json({evaluationSchema: evaluation});
  })
});

router.get('/evaluations/clients', function(req, res){
  Evaluation.find({client: 'name'}).sort({ninja: X}).limit(x).exec(function(err, clients){
    function(err, client){
      if (err){
        return res.sendStatus(404);
      }
      res.json(clients.x)
      }
  })
});

// ProjectModel.find({projectName: 'name'}).sort({viewCount: -1}).limit(5).exec( 
//     function(err, projects) {
//         ...
//     }
// );


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
