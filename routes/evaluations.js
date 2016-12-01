'use strict';
const express = require('express');
const router = express.Router();
const evaluation = require('./../controllers/evaluation.js');

router.get('/', evaluation.getEvals);

router.get('/peer-evaluations', evaluation.getNinjasClients);

router.put('/:id', evaluation.updateEval);

router.post('/', evaluation.createEval);

router.delete('/:id', evaluation.deleteEval);

module.exports = router;
