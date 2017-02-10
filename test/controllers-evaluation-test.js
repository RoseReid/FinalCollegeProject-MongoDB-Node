var chai = require('chai');
var mocha = require('mocha');
var proxyquire = require('proxyquire');
// var http_mocks = require('node-mocks-http');
var should = require('should');
var sinon = require('sinon');
var assert = require('assert');

function getStubbedEvaluation (stub) {
  return proxyquire('../controllers/evaluation.js',
    {
      '../models/evaluations.js': stub
    });
}

describe('evaluation', function () {
// Test 1
  it('should get eval based on email in headers', function () {
    var httpSpies = function getHttpSpies () {
      return {
        req: {
          get: sinon.spy()
        }
      };
    };
    var res = { json: sinon.spy() };

    var evalStub = {
      find: function () {}
    };
    var evaluation = getStubbedEvaluation(evalStub);
    console.log(httpSpies().req);
    evaluation.getEvals(httpSpies().req, httpSpies().res);  // when

    httpSpies().req.get.called.should.equal(true); // then
  });

// Test 2
  it('should get ninjas evals based on email', function () {
    var res = { json: sinon.spy() };
    var next = sinon.spy();
    var req = {
      get: function () { return 1337; }
    };
    var evalStub = {
      find: sinon.spy()
    };
    var evaluation = getStubbedEvaluation(evalStub);

    evaluation.getEvals(req, res, next);

    assert.evaluation.calledWith.find('ninja.email').should.equal(1337);
  });

// Test 3
  it('should respond with an error when finding Ninja throws an error', function () {
    var res = { json: sinon.spy() };
    var next = sinon.spy();
    var req = {
      get: function () { return 1337; }
    };
    var err = new Error('hello meow');
    var evalStub = {
      find: function ({evaluation}, fn) {
        fn(err);
      }
    };
    var evaluation = getStubbedEvaluation(evalStub);

    evaluation.getEvals(req, res, next);

    assert(next.calledWith(err));
  });

// Test 4
  it('returns the found evaluation as a json type', function () {
    var req = {
      get: function () { return true; }
    };
    var res = { json: true };

    var evalStub = {
      find: function ({evaluation}, fn) {
        fn(err, mockData1234);
      }
    };
    var evaluation = getStubbedEvaluation(evalStub);

    evaluation.getEvals(req, res); // when

    assert(res.get.calledWith('ninja.email').should.equal(true));

    // httpSpies.req.get.calledWith('ninja.email').should.equal(true); //then
  });

// test 5
  it('returns the correct evaluation', function () {
    var req = {
      get: function () { return false; }
    };
    var err = new Error('404');
    var res = (err);
    var next = sinon.spy();

    var evalStub = {
      find: function ({evaluation}, fn) {
        fn(err, 1234);
      }
    };
    var evaluation = getStubbedEvaluation(evalStub);

    evaluation.getEvals(req, res, next); // when

    assert(res.get.calledWith('ninja.email').should.equal(false));

    // httpSpies.req.get.calledWith('ninja.email').should.equal(true); //then
  });
});
