
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


// exports.deleteEval = function(req,res, next){
//   var id = req.params.id;
//     Evaluation.findById(id, function(err, evaluation){
//       if(!id || !evaluation){
//       let err = new Error(function(id, evaluation){
//         if (!id){
//         let err = new Error ("id not found")
//         err.status = 404;
//         next(err)
//       }
//        else if(!evaluation){
//         let err = new Error ("id not found")
//         err.status = 404;
//         next(err)
//       }
//       })
//       console.log(err)
//       err.status= (404);
//       next(err);
//     }else{
//       evaluation.remove(function(err, evaluationRemoved){
//         if (err){
//         let err = new Error("eval not removed, sorry!")
//         err.status = 400;

//         next(err);
//           }else{
//           res.json(evaluationRemoved);
//         }
//       });
//     }
//     });
// };