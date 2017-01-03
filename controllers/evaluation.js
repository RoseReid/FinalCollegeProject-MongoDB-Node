
'use strict';

const Evaluation = require('../models/evaluations.js');
exports.getEvals = function (req, res, next) {
  const ninjaEmail = req.get('ninja.email');
  Evaluation.find({'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      return next(err);
    } else if (!evaluation) {
      let err = new Error('no evals found!');
      err.status = (404);
      return next(err);
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
  const evaluationData = req.body;
  const evaluation = new Evaluation(evaluationData); // try catch
  evaluation.save(function (err, evaluationSaved) {
    if (err) {
      return next(err);
    } else if (!evaluationSaved || evaluationSaved.length === 0) {
      let err = new Error('Evaluations not created!');
      err.status = (503);
      return next(err);
    } else {
      res.json(evaluationSaved);
    }
  });
};

//updateEvaluation
exports.updateEval = function (req, res, next) {
  const evaluationData = req.body;
  const id = req.params.id;
  const ninjaEmail = req.get('ninja.email');
  Evaluation.findOne({_id: id, 'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      return next(err);
    }
    if (!evaluation) {
      let err = new Error("that's not your email, buddy!");
      //forbidden
      err.status = (404);
      return next(err);
    }
    evaluation.set(evaluationData);
    evaluation.save(function (err, evaluationSaved) {
      if (err) {
        err.status = 500;
        return next(err);
      }
      res.json(evaluationSaved);
    });
  });
};

exports.deleteEval = function (req, res, next) {
  const id = req.params.id;
  const ninjaEmail = req.get('ninja.email');
  Evaluation.findOne({_id: id, 'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      return next(err);
    } else if (!evaluation) {
      err.status = 404;
      return next(err);
    }
    evaluation.remove(function (err, evaluationRemoved) {
      if (err) {
        let err = new Error('eval not removed, sorry!');
        err.status = 503;
        return next(err);
      } else {
        res.json(evaluationRemoved);
      }
    });
  });
};
