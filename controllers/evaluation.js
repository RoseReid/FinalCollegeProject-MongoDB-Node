
'use strict';

var Evaluation = require('../models/evaluations.js').Model;

exports.getEvals = function (req, res, next) {
  const ninjaEmail = req.get('ninja.email');
  Evaluation.find({'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      next(err);
    } else if (!evaluation) {
      let err = new Error("that's not your email!");
      err.status = (403);
      next(err);
    } else {
      res.json({evaluationSchema: evaluation});
    }
  });
};

exports.getNinjasClients = function (req, res, next) {
  const ninjaEmail = req.get('ninja.email');
  const limit = req.get('limit');
  Evaluation.getNinjasClients(ninjaEmail, limit)
    .then(function (client) {
      res.json(client);
    }, function (err) {
      return next(err);
    });
};

exports.createEval = function (req, res, next) {
  var evaluationData = req.body;
  var evaluation = new Evaluation(evaluationData);
  evaluation.save(function (err, evaluationSaved) {
    if (err) {
      return next(err);
    } else if (!evaluation) {
      let err = new Error('Evaluations not created!');
      err.status = (400);
      return next(err);
    } else {
      res.json(evaluationSaved);
    }
  });
};

exports.updateEval = function (req, res, next) {
  var evaluationData = req.body;
  var id = req.params.id;
  const ninjaEmail = req.get('ninja.email');
  Evaluation.findOne({_id: id, 'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      return next(err);
    }
    if (!evaluation) {
      let err = new Error("that's not your email, buddy!");
      err.status = (403);
      return next(err);
    } else {
      evaluation.set(evaluationData);
      evaluation.save(function (err, evaluationSaved) {
        if (err) {
          err.status = 400;
          return next(err);
        } else {
          res.json(evaluationSaved);
        }
      });
    }
  });
};

exports.deleteEval = function (req, res, next) {
  const id = req.params.id;
  const ninjaEmail = req.get('ninja.email');
  Evaluation.findOne({_id: id, 'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      return next(err);
    }
    evaluation.remove(function (err, evaluationRemoved) {
      if (err) {
        let err = new Error('eval not removed, sorry!');
        err.status = 400;
        return next(err);
      }
      res.json(evaluationRemoved);
    });
  });
};
