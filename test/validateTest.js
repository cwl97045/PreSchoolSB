var chai = require('chai'), validate = require('../utility/validate');
var expect = chai.expect;

describe("Testing the validation functions", function (){
	it("should return false with a null string", function (){
		expect(validate.notNull("")).to.equal(false);
	});
	it("should return true with a valued string", function (){
		expect(validate.notNull("BOOM")).to.equal(true);
	});
});