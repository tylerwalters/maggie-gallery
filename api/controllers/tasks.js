/** 
	* MediaTasks tasks watch the media directory for new, changed, or deleted images
	* and videos. It reads exif data from new media, converts the data into 
	* something usable, adds it to the database, and passes the passes it to the
	* media controller for processing. Deleted media is removed from the database.
	*
	* @namespace MediaTasks
	*/

var path		= require('path'),
		hound		= require('hound'),
		exif		= require('exif2'),
		http 		= require('http'),
		MediaController = require('./media');

(function () {
	var MediaTasks;

	MediaTasks = (function (tasks) {
		/**
			* Watches specified directory for new, changed, or deleted media and
			* calls the appropriate funtions to handle them.
			* 
			* @memberof MediaTasks
			* @public
			*/
		tasks.watchDirectory = function (directory, watcher, createCallback, changeCallback, deleteCallback) {
			'use strict';

			createCallback = createCallback || readExif;
			deleteCallback = deleteCallback || deleteMedia;
			watcher = watcher || hound.watch(directory);

			watcher.on('create', function(file, stats) {
				createCallback(file);
			});

			watcher.on('change', function(file, stats) {
				if (changeCallback !== undefined) {
					changeCallback(file);
				}
			});

			watcher.on('delete', function(file) {
				if (deleteCallback !== undefined) {
					deleteCallback(file);
				}
			});
		};

		/**
			* Reads exif data from new media and passes it to the prepareData()
			* function.
			* 
			* @memberof MediaTasks
			*/
		function readExif (file) {
			'use strict';

			exif(file, function (err, obj) {
				if (err) throw err;

				prepareData(obj);
			});
		}

		/**
			* Parses exif data from readExit() and prepares it so it is ready to be
			* submitted to the database with submitMedia().
			* 
			* @memberof MediaTasks
			*/
		function prepareData (data) {
			'use strict';

			var preparedData = {},
					createDate, 
					file, 
					lastindex, 
					sizearray;

			// Convert date into a string usable by JavaScript's new Date()
			createDate = data['create date'].split(' ');
			createDate[0] = createDate[0].replace(/[:]/g, '-');
			createDate = createDate.join('T');

			// Set up file name to be split into filename and extension
			file = data['file name'];
			lastindex = file.lastIndexOf('.');

			// Creates an array for width and height
			sizearray = (data['image size']) ? data['image size'].split('x') : [];

			preparedData.extension = file.substr(lastindex + 1);
			preparedData.filename = file.substr(0, file.length - preparedData.extension.length - 1);
			preparedData.title = preparedData.filename;
			preparedData.tags = [];
			preparedData.date = new Date(createDate);
			preparedData.description = '';
			preparedData.dimensions = data['image size'];
			preparedData.width = Number(sizearray[0]);
			preparedData.height = Number(sizearray[1]);
			preparedData.layout = (preparedData.width > preparedData.height) ? 'landscape' : 'portrait';

			if (preparedData.extension.match(/^(jpg|jpeg|png|gif)$/)) {
				preparedData.type = 'photo';
			} 
			else if (preparedData.extension.match(/^(mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2|webm)$/)) {
				preparedData.type = 'video';
			} 
			else {
				preparedData.type = 'not allowed';
			}

			submitMedia(preparedData);
		}

		/**
			* Passes the data from prepareData() to the API that submits it to the
			* database via an HTTP request. Then passes the data to optimizeImage()
			* or optimizeVideo() to prepare the media for the web.
			* 
			* @memberof MediaTasks
			*/
		function submitMedia (preparedData, host, path, port) {
			'use strict';

			var options, 
					req,
					data = JSON.stringify(preparedData),
					callback;

			callback = (preparedData.type === 'video') ? optimizeVideo : optimizeImage;

			host = host || 'localhost';
			path = (preparedData.type === 'video') ? '/api/v1/videos' : '/api/v1/photos';
			port = port || 8080;

			options = {
				host: host,
				path: path,
				port: port,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			};

			req = http.request(options, function (response) {
				response.on('data', function (chunk) {
					// A piece of data has been recieved
				});

				response.on('end', function () {
					// Response has been recieved
					if (callback) {
						callback(preparedData);
					}
				});
			});

			req.write(data);
			req.end();
		}

		/**
			* Converts full resolution image to web optimized versions to be used on
			* on the website and other applications.
			* 
			* @memberof MediaTasks
			*/
		function optimizeImage (data, imagePath, destPath) {
			'use strict';

			imagePath = imagePath || __dirname + '/../../public/media/photos/';
			destPath = destPath || __dirname + '/../../public/images/';

			var orig = imagePath + data.filename + '.' + data.extension;

			MediaController.imageMobile(orig, destPath + data.filename + '.' + 'mob' + '.' + data.extension);
			MediaController.imageDesktop(orig, destPath + data.filename + '.' + 'desk' + '.' + data.extension);
			MediaController.imageThumb(orig, destPath + data.filename + '.' + 'thumb' + '.' + data.extension);
			MediaController.imageLarge(orig, destPath + data.filename + '.' + 'large' + '.' + data.extension);
			MediaController.imageBackground(orig, destPath + data.filename + '.' + 'bg' + '.' + data.extension);
		}

		/**
			* On delete of media from the media directory, this function will delete
			* the optimized media files and send a call to the API to delete the item
			* from the database.
			* 
			* @memberof MediaTasks
			*/
		function deleteMedia (file, host, path, port) {
			'use strict';

			var options, 
					req,
					filename = '',
					extension = '';

			filename = file.substring(file.lastIndexOf('/') + 1);
			filename = filename.substring(0, filename.length - 4);
			extension = file.slice(-3);

			if (file.indexOf('/photos/') !== -1) {
				var imagePath = __dirname + '/../../public/images/';

				MediaController.removeMedia(imagePath + filename + '.thumb.' + extension);
				MediaController.removeMedia(imagePath + filename + '.mob.' + extension);
				MediaController.removeMedia(imagePath + filename + '.desk.' + extension);
				MediaController.removeMedia(imagePath + filename + '.large.' + extension);
				MediaController.removeMedia(imagePath + filename + '.bg.' + extension);
			}

			host = host || 'localhost';
			path = (file.indexOf('/photos/') === -1) ? '/api/v1/videos' + encodeURIComponent(filename) : '/api/v1/photos' + encodeURIComponent(filename);
			port = port || 8080;

			options = {
				host: host,
				path: path,
				port: port,
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			};

			http.request(options, function (response) {
				response.on('data', function (chunk) {
					// A piece of data has been recieved
				});

				response.on('end', function () {
					// Response has been recieved
					console.log(filename + ' deleted.');
				});
			}).end();
		}

		return tasks;
	})({});

	module.exports = MediaTasks;
})();