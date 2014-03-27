var chai = require('chai'),frontEndValidate = require('../public/js/valid.js').validateModule;
var expect = chai.expect;



describe('Front-End validation tests', function (){
  describe('Two inputs the same', function (){
    it('should return true if inputs are the same', function (){
      expect(frontEndValidate.twoInputsSame('apple', 'apple')).to.be.true;
      expect(frontEndValidate.twoInputsSame(100,100)).to.be.true;    
    });
    it('should return false if inputs are different', function (){
	  expect(frontEndValidate.twoInputsSame('ahh', 'boo')).to.be.false;
	  expect(frontEndValidate.twoInputsSame(100, '100')).to.be.false;
	  expect(frontEndValidate.twoInputsSame(99, 100)).to.be.false;	
	});		
  });
  describe('Check Password', function () {
    it('should return true if password has atleast 5 chars, one special, one number and one upper', function () {
	  expect(frontEndValidate.checkPassword('B@rkdust1')).to.be.true;
	  expect(frontEndValidate.checkPassword('124af@A')).to.be.true;
    });
    it('should return false if password doesn\'t meet reqs', function () {
      expect(frontEndValidate.checkPassword('123')).to.be.false;
      expect(frontEndValidate.checkPassword('b@rkdust1')).to.be.false;
      expect(frontEndValidate.checkPassword('12345678910')).to.be.false;
    });
  });
  describe('Check Email', function () {
    it('Should return true on valid email', function () {
      expect(frontEndValidate.checkEmail('laytonsunlimited@gmail.com')).to.be.true;
      expect(frontEndValidate.checkEmail('1341234@dfasdf.dadf')).to.be.true;
    });
    it('Should return false on invalid email', function () {
      expect(frontEndValidate.checkEmail('13412341234d@fadfadfadf')).to.be.false;
      expect(frontEndValidate.checkEmail('Harrpotter.com')).to.be.false
    });
  });
});
