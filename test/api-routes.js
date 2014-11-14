var should = require('chai').should();

describe('API Routing', function() {
	describe('Photos', function () {
		it('should pass a sample test', function() {
			'test'.should.equal('test');
		});

		it('should also pass a second sample test', function() {
			'test2'.should.equal('test2');
		});
	});

	describe('Videos', function () {
		it('should pass a sample test', function() {
			'test'.should.equal('test');
		});

		it('should also not pass this test', function() {
			'test3'.should.equal('test3');
		});

		it('should also pass a second sample test', function() {
			'test2'.should.equal('test2');
		});
	});

	describe('Users', function () {
		it('should pass a sample test', function() {
			'test'.should.equal('test');
		});

		it('should also pass a second sample test', function() {
			'test2'.should.equal('test2');
		});
	});
});