
"use strict"

var request = require('request');
var Evaluation = require('../models/evaluations.js').Model;


//Instead of get I use Ninja find and send in Ninja's email to get evaluations
//headers so Ninjas can get their own evaluation via email
exports.getEvals = function(req, res, next) {
    const ninjaEmail = req.get('ninja.email');
    Evaluation.find({"ninja.email":ninjaEmail}, function(err, evaluation) {
        if (err) {
            console.log(err);
            next(err);
        } else if (!evaluation) {
            let err = new Error("that's not your email!");
            err.status = (404);
            next(err);
        } else {
            res.json({evaluationSchema: evaluation});
        }
    })
};


exports.getNinjasClients = function(req, res, next) {
    console.log(req.headers)
    const ninjaEmail = req.get('ninja.email');
    const limit = req.get('limit');
    Evaluation.getNinjasClients(ninjaEmail, limit).
    then(function(client) {
        res.json(client);
    }, function(err) {
        return next(err);
    })

};



exports.createEval = function(req, res, next) {
    var evaluationData = req.body;
    var id = req.params.id;
    const ninjaEmail = req.get('ninja.email');
    var evaluation = new Evaluation(evaluationData);
    evaluation.save({"ninja.email":ninjaEmail}, function(err, evaluationSaved) {
        if ("ninja.email" !== ninjaEmail) {
          return next(err);
        } else if (!evaluation) {
            let err = new Error("Evaluations not found!");
            err.status = (404);
            return next(err);
        } else {
            res.json(evaluationSaved);
        }
    })
};





exports.updateEval = function(req, res, next) {
    var evaluationData = req.body;
    var id = req.params.id;
    const ninjaEmail = req.get('ninja.email');
    Evaluation.findOne({_id: id, "ninja.email":ninjaEmail}, function(err, evaluation) {
        if (err) {
            console.log('evaluations not found');
            return next(err); 
        }
        if (!evaluation){
            let err = new Error("that's not your email, buddy!")
            err.status = 404
            return next(err);
        }else{
        evaluation.set(evaluationData);
        evaluation.save(function(err, evaluationSaved) {
                if (err) {
                    err.status = 400;
                    return next(err);
                } else {
                    res.json(evaluationSaved); 
                }
            })
            }
    });
};


//that can stay inthe params
exports.deleteEval = function(req, res, next) {

    const id = req.params.id;
    const ninjaEmail = req.get('ninja.email');
    Evaluation.findOne({_id: id, "ninja.email":ninjaEmail}, function(err, evaluation) {
        if (err) {
            return next(err)
        }

        evaluation.remove(function(err, evaluationRemoved) {
            if (err) {
                let err = new Error("eval not removed, sorry!")
                err.status = 400;
                return next(err);
            }
            res.json(evaluationRemoved);
        });

    });

};