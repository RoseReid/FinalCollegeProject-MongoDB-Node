'use strict';
const express = require('express');
const router = express.Router();
const template = require('./../controllers/templates.js');

router.get('/', template.getTemplate);

router.post('/', template.postTemplate);

router.put('/:id', template.putTemplate);

router.delete('/:id', template.deleteTemplate);

module.exports = router;
