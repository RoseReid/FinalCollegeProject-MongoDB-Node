//that can stay inthe params
exports.deleteEval = function(req,res, next){
  
  var id = req.params.id;
  //guard
   console.log(req.params.id)
  if(typeof !id === 'undefined'){
    console.log("Id undefined");
        let err = new Error ("id not found")
        err.status = 404;
        console.log(err)
        next(err)
      }
    Evaluation.findById(id, function(err, evaluation){
      if(!evaluation){  
        let err = new Error ("eval not found")
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



exports.deleteEval = function(req,res, next){
  var id = req.params.id;
    Evaluation.findById(id, function(err, evaluation){
      if(!id || !evaluation){
      let err = new Error(function(id, evaluation){
        if (!id){
        let err = new Error ("id not found")
        err.status = 404;
        next(err)
      }
       else if(!evaluation){
        let err = new Error ("id not found")
        err.status = 404;
        next(err)
      }
      })
      console.log(err)
      err.status= (404);
      next(err);
    }else{
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
