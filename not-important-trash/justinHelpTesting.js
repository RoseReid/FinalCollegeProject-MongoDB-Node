  
  
  it ('should respond with a JSON object', function () {
    var res = { json: sinon.spy() };
    var next = sinon.spy();
    var err = false; // first this is true, 2nd it is false, 3rd does not matter
    var req = {
      get: function () { return ('Content-Type', /json/); }
    };
    var evalStub = {
      find: function (obj, fn) {
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
    evaluation.getEvals(req, res, next);

    // then
    next.calledWith(err).should.be(true);


    var expected = new Error('no evals found!');
    expected.status = 404;
    next.calledWith(expected).should.be(true);


    res.json.calledWith({evaluationSchema: 1234}).should.be(true);

  });


// var mongooseMock = require('mongoose-mock'),
// proxyquire = require('proxyquire'),
// chai = require('chai'),
// expect = chai.expect,
// sinon = require('sinon'),
// sinonChai = require("sinon-chai");

// chai.use(sinonChai);


// describe('evaluation', function () {

//   var evaluation;
//   var evalStub;

//   before(function() {
//     evalStub = {
//       Model = {
//         getNinjasClients = function(ninjaEmail, limit) {
//           sinon.spy();
//         }
//       }
//     };
//     evaluation = proxyquire('../controllers/evaluation.js', { '../models/evaluations.js': evalStub });

//     var req = {
//       get = function(key) {
//         if (key == 'ninja.email') {
//           return 123;
//         }
//         if (key == 'limit') {
//           return 1337;
//         }
//       }
//     };
//     var res = {};
//     var next = function(){};
//     expect(evaluation.getNinjasClients(req, res, next)).calledOnce;
//   });
  
// });


// describe('.createEval', function () {
//   it('saves the evaluation', function () {
//     var callback = sinon.spy();
//     var Evaluation = evaluation.createEval({ name: 'Mr', email: 'White@email' }, callback);
//     expect(evaluation.save).calledOnce;
//   });
// });


// ///////Rose
// var evaluation = ('../controllers/evaluation.js')

// describe('evaluation', function() {
//   it('should return email from headers', function() {

//     var expect = require('chai').expect;
//     expect('evaluation').to.equal(ninjaEmail);

//   });
// });