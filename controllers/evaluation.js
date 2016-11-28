'use strict'
var request = require('request');
var Evaluation = require('../models/evaluations.js').Model;


//Instead of get I use Ninja find and send in Ninja's email to get evaluations
//headers so Ninjas can get their own evaluation via email
exports.getEvals = function(req, res, next) {
  Evaluation.find(function (err, evaluation) {
    if (err) {
      console.log(err);
      next (err);
    }else if(!evaluation){
      let err = new Error("Evaluations not found!");
      err.status = (404);
      next(err);
    } else {
      res.json({evaluationSchema: evaluation});
    }
  })
};




exports.getNinjasClients = function(req, res){
  console.log(req.headers)
  const ninjaEmail = req.get('ninja.email');
  // const ninjaName = req.get('ninja.name');
  const limit = req.get('limit');
  Evaluation.getNinjasClients(ninjaEmail,limit).
  then(function(client){
    res.json(client);
  }, function(err){
    next(err);  
  })
  
};



//username and email in headers not body
exports.createEval = function(req, res) {
  var evaluationData = req.body;
  var evaluation = new Evaluation(evaluationData);
  evaluation.save(function (err, evaluationSaved) {
    if (err) {
    next (err);
    }else if(!evaluation){
      let err = new Error("Evaluations not found!");
      err.status = (404);
      next(err);
    } else {
      res.json(evaluationSaved);
    }
       //201 status code which is created. 201 get everytime you create something (lots of ppl use 200)
//status code imp after rest
}
)};





exports.updateEval = function(req,res, next){
  var evaluationData = req.body;
  var idByHeader = req.get("X-eval-id");  
  Evaluation.findById(idByHeader, function(err, evaluation){
    if (err){
        console.log('evaluations not found'); 
      next(err);        //not found since id does not exist
    }else if(!evaluation){
      let err = new Error("id not found!")
      err.status = 404;
      next(err);
    }
    else{
      evaluation.set(evaluationData);
      evaluation.save(function(err, evaluationSaved){
        if (err){
          console.log(err)
          //bad request since the content does not match. Have content but can't save it
          err.status = 400;
          next(err);
        }else{
          res.json(evaluationSaved);  //default 200 is fine since no brand new
        }
      })
    }
});
};


//that can stay inthe params
exports.deleteEval = function(req,res, next){
  if(!id){
        let err = new Error ("id not found")
        err.status = 404;
        console.log(err)
        next(err)
      }
  var id = req.params.id;
    Evaluation.findById(id, function(err, evaluation){
         if(!evaluation){
        let err = new Error ("id not found")
        err.status = 404;
        console.log(err)
        next(err)
      }

    else{
      evaluation.remove(function(err, evaluationRemoved){
        if (err){
        let err = new Error("eval not removed, sorry!")
        err.status = 400;

        next(err);
          }else{
          res.json(evaluationRemoved);
        }
      });
    }
    });
};