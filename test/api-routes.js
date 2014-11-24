// var request 	= require('supertest'),
// 		should 		= require('chai').should(),
// 		express 	= require('express'),
// 		mongoose 	= require('mongoose'),
// 		app				= express();

// require('../api/routes')(app);

// var db = require('./config/db');

// describe('API Routing', function() {
// 	before(function(done) {
//     mongoose.createConnection(db.url);							
//     done();
//   });

// 	describe('Media', function () {
// 		it('should respond to GET /api/v1/media with all media as JSON', function() {
// 			request(app)
// 				.get('/api/v1/media')
// 				.set('Accept', 'application/json')
// 				.end(function(err, res) {
// 					if (err) {
// 						throw err
// 					}

// 					res.status.should.equal(200);
// 					done();
// 				});
// 		});

// 		it('should add new photo to database with call to POST /api/v1/media', function() {
// 			request(app)
// 				.post('/api/v1/media')
// 				.set('Accept', 'application/json')
// 				.end(function(err, res) {
// 					if (err) {
// 						throw err
// 					}

// 					res.status.should.equal(200);
// 					done();
// 				});
// 		});
// 	});

// 	describe('Photos', function () {
// 		it('should respond to GET /api/v1/photos with all photos as JSON', function() {
// 			request(app)
// 				.get('/api/v1/photos')
// 				.set('Accept', 'application/json')
// 				.end(function(err, res) {
// 					if (err) {
// 						throw err
// 					}

// 					res.status.should.equal(200);
// 					done();
// 				});
// 		});

// 		it('should also pass a second sample test', function() {
// 			'test2'.should.equal('test2');
// 		});
// 	});

// 	describe('Videos', function () {
// 		it('should pass a sample test', function() {
// 			'test'.should.equal('test');
// 		});

// 		it('should also not pass this test', function() {
// 			'test3'.should.equal('test3');
// 		});

// 		it('should also pass a second sample test', function() {
// 			'test2'.should.equal('test2');
// 		});
// 	});

// 	describe('Users', function () {
// 		it('should pass a sample test', function() {
// 			'test'.should.equal('test');
// 		});

// 		it('should also pass a second sample test', function() {
// 			'test2'.should.equal('test2');
// 		});
// 	});
// });