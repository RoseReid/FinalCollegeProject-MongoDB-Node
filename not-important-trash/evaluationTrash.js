
//email and username in headers
//error handling using next and also more descriptive error handling
//errorhandling -logging the error-reporting to broweser+user

// exports.updateEval = function(req,res){
//   var evaluationData = req.body;

// //if findbyid expolodes- it goes to err and if(err)
//   Evaluation.findById(req.params.id, function(err, evaluation){
//     if (err){
//       console.log(err); //in production will go to db or some lib in express logger (logging look up)
//       //not found
//       //attach text to the http status codes
//       return res.sendStatus(404);  //not found since id does not exist
//     }else{
//       evaluation.set(evaluationData);
//       evaluation.save(function(err, evaluationSaved){
//         if (err){
//           console.log(err)
//           //bad request since the content does not match. Have content but can't save it
//           return res.sendStatus(400);
//         }else{
//           res.json(evaluationSaved);  //default 200 is fine since no brand new
//         }
//       })
//     }
// });
// };




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
