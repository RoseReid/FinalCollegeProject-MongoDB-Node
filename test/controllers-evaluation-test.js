'use strict'
var chai = require('chai'),
 mocha = require('mocha')
var http_mocks = require('node-mocks-http')
var should = require('should')
var mockery = require('mockery')

var evaluation = require('../controllers/evaluation.js');

function buildResponse() {
  return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('News Controller Tests', function() {

  before(function() {
    mockery.enable({
      warnOnUnregistered: false
    })

    mockery.registerMock('../models/evaluations.js', {
      all: (cb) => cb(null, ["First news", "Second news"]),
      create: (evaluation, cb) => cb(null, {'ninja.email': ninjaEmail})
    })

    this.controller = require('../controllers/evaluation.js')
  })

  after(function() {
    mockery.disable()
  })

  it('all', function(done) {
    var response = buildResponse()
    var request  = http_mocks.createRequest({
      method: 'GET',
      url: '/evaluations',
    })

    response.on('end', function() {
      response._isJSON().should.be.true

      var data = JSON.parse(response.getEvals())
      should.not.exist(data.error)
     // data.news.length.should.eql(2)
      //data.news[0].should.eql("First news")
      //data.news[1].should.eql("Second news")

      done()
    })

    this.evaluation.getEvals(request, response)
  })

  /*it('create', function(done) {
    var response = buildResponse()
    var request  = http_mocks.createRequest({
      method: 'POST',
      url: '/create',
    })

    request.body = {
      title: "Something is happening",
      text: "Something is happening in the world!"
    }

    response.on('end', function() {
      response._isJSON().should.be.true

      var data = JSON.parse(response._getData())
      should.not.exist(data.error)
      data.news.title.should.eql(request.body.title)
      data.news.text.should.eql(request.body.text)
      data.news.id.should.exist

      done()
    })

    this.controller.handle(request, response)
  })*/
})