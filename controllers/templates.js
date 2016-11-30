'use strict';
var Template = require('../models/templates.js').Model;

exports.getTemplate = function (req, res) {
  Template.find(function (err, template) {
    if (err) {
            // Bad request
      return res.sendStatus(400);
    }
    res.json({
      templateSchema: template
    });
  });
};

exports.postTemplate = function (req, res) {
  var templateData = req.body;
  var template = new Template(templateData);
  template.save(function (err, templateSaved) {
    if (err) {
      return res.sendStatus(500);
    }
    res.json(templateSaved);
  });
};

exports.putTemplate = function (req, res) {
  var templateData = req.body;

  Template.findById(req.params.id, function (err, template) {
    if (err) {
      return res.sendStatus(400);
    } else {
      template.set(templateData);
      template.save(function (err, templateSaved) {
        if (err) {
          return res.sendStatus(204);
        } else {
          res.json(templateSaved);
        }
      });
    }
  });
};

exports.deleteTemplate = function (req, res) {
  var id = req.params.id;
  Template.findById(id, function (err, template) {
    Template.findById(req.params.id, function (err, template) {
      if (err) {
        return res.sendStatus(400);
      } else {
        template.remove(function (err, templateRemoved) {
          if (err) {
            return res.sendStatus(204);
          } else {
            res.json(templateRemoved);
          }
        });
      }
    });
  });
};
