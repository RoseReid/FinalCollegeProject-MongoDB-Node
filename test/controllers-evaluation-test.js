var chai = require('chai');
var mocha = require('mocha');
var proxyquire = require('proxyquire');
// var http_mocks = require('node-mocks-http');
var should = require('should');
// var mockery = require('mockery');
var sinon = require('sinon');

/* 1st
Ensure fetches Ninja email
mock req to return email (req.get) */
// given

describe('evaluation', function () {

  it ('should return all evaluations', function () {

    // given
    var res = { json: sinon.spy() };
    var nextStub = sinon.stub();
    var req = { get: sinon.spy() };
    var evalStub = {
      Model: {
        find: () => console.log('BOoooo')
      }
    };
    var evaluation = proxyquire('../controllers/evaluation.js',
      {
        '../models/evaluations': evalStub
      });
    console.log({evaluation});

    // when
    evaluation.getEvals(req, res, nextStub);

    // then
    req.get.calledWith('ninja.email').should.equal(true);
    nextStub.called.should.equal(false);


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