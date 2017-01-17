'use strict';
const Template = require('../models/templates.js').Model;

exports.getTemplate = function (req, res, next) {
  Template.find(function (err, template) {
    if (err) {
      let err = new Error('templates not found');
      err.status = (400);
      return next(err);
    }
    res.json({templateSchema: template});
  });
};

exports.createTemplate = function (req, res, next) {
  const templateData = req.body;
  const template = new Template(templateData);
  template.save(function (err, templateSaved) {
    if (err) {
      let err = new Error('templates not created');
      err.status = (409);
      return next(err);
    } else {
      res.json(templateSaved);
    }
  });
};

exports.updateTemplate = function (req, res, next) {
  const templateData = req.body;
  const id = req.params.id;
  Template.findById({_id: id}, function (err, template) {
    if (err) {
      return next(err);
    } else {
      template.set(templateData);
      template.save(function (err, templateSaved) {
        if (err) {
          let err = new Error('templates not created');
          err.status = (409);
          return next(err);
        } else {
          res.json(templateSaved);
        }
      });
    };
  });
};

exports.deleteTemplate = function (req, res, next) {
  const id = req.params.id;
  Template.findById({_id: id}, function (err, template) {
    if (err) {
      return next(err);
    } else {
      template.remove(function (err, templateRemoved) {
        if (err) {
          return next(err);
        } else {
          return res.json(templateRemoved);
        }
      });
    }
  });
};
