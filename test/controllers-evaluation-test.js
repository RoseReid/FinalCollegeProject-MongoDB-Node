var chai = require('chai');
var mocha = require('mocha');
var proxyquire = require('proxyquire');
// var http_mocks = require('node-mocks-http');
var should = require('should');
var sinon = require('sinon');
var assert = require('assert');

/* 1st
Ensure fetches Ninja email
mock req to return email (req.get) */
// given

function getStubbedEvaluation(stub) {
  return proxyquire('../controllers/evaluation.js',
    {
      '../models/evaluations.js': stub
    });
}

function getHttpSpies() {
  return {
    res: { json: sinon.spy() },
    next: sinon.spy(),
    req: {
      get: function () { return 1337; }
    }
  };
}

//test names:
describe('evaluation', function () {

//helper method. call it stubEvaluation and it returns eval
  it ('should get eval based on email in headers', function () {

    // given
    var httpSpies = getHttpSpies();
    var evalStub = {
      find: function () {}
    };
    var evaluation = getStubbedEvaluation(evalStub);

    // when
    evaluation.getEvals(httpSpies.req, httpSpies.res, httpSpies.next);

    // then
    httpSpies.req.get.calledWith('ninja.email').should.equal(true);
  });

  it('should get ninjas evals based on email', function () {

    // given
    var res = { json: sinon.spy() };
    var next = sinon.spy();
    var req = {
      get: function () { return 1337; }
    };
    var evalStub = {
      find: sinon.spy()
    };
    var evaluation = proxyquire('../controllers/evaluation.js',
      {
        '../models/evaluations.js': evalStub
      });

    // when
    evaluation.getEvals(req, res, next);

    // then
    assert(evalStub.find.calledWith({'ninja.email': 1337}));
  });

  
  //test1: returns next error when finding Ninja throws an error
  //test2: returns 404 error if no evals found
  //test3: returns json with the found evaluation.
  it ('should respond with an error when finding Ninja throws an error', function () {
    var res = { json: sinon.spy() };
    var next = sinon.spy();
    //created an error object
    var err = new Error('hello meow'); // first this is true, 2nd it is false, 3rd does not matter
    var req = {
      get: function () { return 1337; }
    };
    var evalStub = {
      find: function ({evaluation}, fn) {
        fn(err, 1234);
        //fn(true, false);
        //fn(true, 1234);
      }
    };
    var evaluation = proxyquire('../controllers/evaluation.js',
      {
        '../models/evaluations.js': evalStub
      });

    // when
    //evaluation.getEvals(req, res, next);

    // then
    //next.calledWith(err).should.be(true);


    //var expected = new Error('no evals found!');
    //expected.status = 404;
    //next.calledWith(expected).should.be(true);


    //res.json.calledWith({evaluationSchema: 1234}).should.be(true);

  });

});


/* 2nd
Mock req get(does not matter what I return inside inside find {ninjaEmail:req.get}) */

/* 3rd copy above and then pass in function. put a string 
or whatever to see that next with string is called
Repeat (false- but don't pass eval')
ensure next is called w/ new error
Repeat the same but (false, pass in eval)=> pass in eval(true/string)
assert res.json(evalSchema: matches whats in the true/string)
 
 */