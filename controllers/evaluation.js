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

// go to models/evaluations.js for static connected to this
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
  const evaluation = new Evaluation(evaluationData);
  evaluation.save(function (err, evaluationSaved) {
    if (err) {
      return next(err);
    } else if (!evaluationSaved || evaluationSaved.length === 0) {
      let err = new Error('Evaluations not created!');
      err.status = (500);
      return next(err);
    } else {
      res.status(200).json(evaluationSaved);
    }
  });
};

exports.updateEval = function (req, res, next) {
  const evaluationData = req.body;
  const id = req.params.id;
  const ninjaEmail = req.get('ninja.email');
  Evaluation.findById({_id: id, 'ninja.email': ninjaEmail}, function (err, evaluation) {
    if (err) {
      console.log('evaluations not found since id does not exist');
      next(err);
    }
    if (evaluation.client.ninjaEmail !== ninjaEmail) {
      let err = new Error('email in header does not match ninjas email in database!');
      err.status = (500);
      return next(err);
    } else {
      evaluation.set(evaluationData);
      evaluation.save(function (err, evaluationSaved) {
        if (err) {
          console.log(err);
          err.status = (422);
          next(err);
        } else {
          res.status(200).json(evaluationSaved).id;
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
    } else if (!evaluation) {
      err.status = (404);
      return next(err);
    }
    evaluation.remove(function (err, evaluationRemoved) {
      if (err) {
        let err = new Error('evaluation not removed, sorry!');
        err.status = (404);
        return next(err);
      } else {
        res.json(evaluationRemoved);
      }
    });
  });
};
