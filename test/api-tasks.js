var request 	= require('supertest'),
		fs				= require('fs'),
		hound			= require('hound'),
		request 	= require('supertest'),
		should 		= require('chai').should(),
		express 	= require('express'),
		mongoose 	= require('mongoose'),
		db 				= require('./config/db'),
		app				= express();

var tasks = require('../api/controllers/tasks');

require('../api/routes')(app);

describe('API Tasks', function () {

	describe('tasks.watchDirectory', function () {
		beforeEach(function() {
			directory = __dirname + '/media';
			testFile 	= directory + '/test/test.js';
			watcher		= hound.watch(directory);
		});

		afterEach(function() {
			watcher.clear();
			directory = null;
			testFile = null;
		});

		it('should recognize when new media is added to the public/media directory', function (done) {
			tasks.watchDirectory(directory, watcher, function (file) {
				file.should.equal(testFile);
				done();
			});

			fs.writeFile(testFile, 'testing testing');
		});

		it('should recognize when media is changed in the public/media directory', function (done) {
			tasks.watchDirectory(directory, watcher, undefined, function (file) {
				file.should.equal(testFile);
				done();
			});
			
			fs.writeFile(testFile, 'testing testing testing');
		});

		it('should recognize when media is deleted in the public/media directory', function (done) {
			tasks.watchDirectory(directory, watcher, undefined, undefined, function (file) {
				file.should.equal(testFile);
				done();
			});
			
			fs.unlink(testFile);
		});
	});

	describe('tasks.readExif', function () {
		it('should read exif data from file passed to it', function (done) {
			var file = __dirname + '/media/photos/cabin.jpg';

			tasks.readExif(file, function (obj) {
				obj['file name'].should.equal('cabin.jpg');
				obj['create date'].should.equal('2014:09:07 17:45:50');
				done();
			});
		});
	});

	describe('tasks.prepareData', function () {
		before(function() {
			data = {
				image1: {
					'file name': 'prepare.jpg',
					'create date': '2014:09:07 17:45:50',
					'file type': 'JPEG',
					'image size': '4160x2340',
					'directory': '/public/media/photos'
				},
				image2: {
					'file name': 'prepare.test.jpg',
					'create date': '2014:09:07 17:45:50',
					'file type': 'PNG',
					'image size': '4160x2340',
					'directory': '/public/media/photos'
				},
				video1: {
					'file name': 'prepare.mpg',
					'create date': '2014:09:07 17:45:50',
					'file type': 'MPEG',
					'image size': '4160x2340',
					'directory': '/public/media/videos'
				},
				video2: {
					'file name': 'prepare.webm',
					'create date': '2014:09:07 17:45:50',
					'file type': 'WEBM',
					'image size': '4160x2340',
					'directory': '/public/media/videos'
				},
				pdf: {
					'file name': 'prepare.pdf',
					'create date': '2014:09:07 17:45:50',
					'file type': 'PDF',
					'directory': '/public/media/videos'
				}
			};
		});

		after(function() {
			data = null;
		});

		it('should convert exif date to JavaScript compatible date', function () {
			tasks.prepareData(data.image1, function (data) {
				data.date.should.deep.equal(new Date('2014-09-07T17:45:50'));
			});
		});

		it('should remove file extension and record the file name', function () {
			tasks.prepareData(data.image1, function (data) {
				data.filename.should.equal('prepare');
			});
		});

		it('should handle an extra period when recording file name (prepare.test.jpg)', function () {
			tasks.prepareData(data.image2, function (data) {
				data.filename.should.equal('prepare.test');
			});
		});

		it('should record the file extension', function () {
			tasks.prepareData(data.image1, function (data) {
				data.extension.should.equal('jpg');
			});
		});

		it('should handle an extra period when recording file extension (prepare.test.jpg)', function () {
			tasks.prepareData(data.image2, function (data) {
				data.extension.should.equal('jpg');
			});
		});

		it('should record the file dimensions', function () {
			tasks.prepareData(data.image1, function (data) {
				data.dimensions.should.equal('4160x2340');
			});
		});

		it('should record the file width', function () {
			tasks.prepareData(data.image1, function (data) {
				data.width.should.equal(4160);
			});
		});

		it('should record the file width', function () {
			tasks.prepareData(data.image1, function (data) {
				data.height.should.equal(2340);
			});
		});

		it('should record the file layout', function () {
			tasks.prepareData(data.image1, function (data) {
				data.layout.should.equal('landscape');
			});
		});

		it('should record if the file is a photo', function () {
			tasks.prepareData(data.image1, function (data) {
				data.type.should.equal('photo');
			});
		});

		it('should record if the file is a video', function () {
			tasks.prepareData(data.video1, function (data) {
				data.type.should.equal('video');
			});
		});

		it('should record if the file type is not allowed', function () {
			tasks.prepareData(data.pdf, function (data) {
				data.type.should.equal('not allowed');
			});
		});
	});

	// describe('tasks.submitMedia', function () {
	// 	before(function() {
	// 		data = {
	// 			'extension': 'jpg',
	// 			'filename': 'test-image',
	// 			'title': 'test-image',
	// 			'tags': [],
	// 			'date': new Date(),
	// 			'description': '',
	// 			'dimensions': '4160x2340',
	// 			'width': 4160,
	// 			'height': 2340,
	// 			'layout': 'landscape',
	// 			'type': 'photo'
	// 		};
	// 	});

	// 	after(function() {
	// 		data = null;
	// 	});

	// 	it('should make a POST request to /api/v1/media to add new media to the database', function (done) {
	// 		tasks.submitMedia(data, 'localhost', '/api/v1/media', 8080);

	// 		request(app)
	// 			.get('/api/v1/media')
	// 			.set('Accept', 'application/json')
	// 			.end(function(err, res) {
	// 				if (err) {
	// 					throw err;
	// 				}

	// 				console.log(res.body);

	// 				res.status.should.equal(200);
	// 				done();
	// 			});
	// 	});
	// });

	// describe('tasks.deleteMedia', function () {
	// 	it('should make a DELETE request to /api/v1/media/:file to add new media to the database', function () {

	// 	});
	// });
});