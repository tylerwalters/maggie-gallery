var fs				= require('fs'),
		hound			= require('hound'),
		should 		= require('chai').should();

var tasks = require('../api/controllers/tasks');

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
});