var chai = require('chai');
var expect = chai.expect;

describe('Testing this out', function (){
	it("shouldt return true", function (){
		expect(2 + 5).to.equal(7);
	});
	it("Shoud return false", function (){
		expect(2 + 3).to.not.equal(1);
	});
});