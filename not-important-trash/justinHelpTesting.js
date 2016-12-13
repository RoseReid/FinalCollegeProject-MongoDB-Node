




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