/**
 *
 *	Automated Tasks
 *	These tasks watch the media directory for new, changed, or deleted images
 *	and videos. It reads exif data from new media, converts the data into 
 *	something usable, adds it to the database, and passes the passes it to the
 *	media controller for processing. Deleted media is removed from the database.
 *
 **/

var path		= require('path'),
		hound		= require('hound'),
		exif		= require('exif2'),
		http 		= require('http');

module.exports = {
	watchDirectory: function (directory, watcher, createCallback, changeCallback, deleteCallback) {
		'use strict';

		createCallback = createCallback || this.readExif.bind(this);
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
	},

	readExif: function (file, callback) {
		'use strict';

		callback = callback || this.prepareData.bind(this);

		exif(file, function (err, obj) {
			if (err) throw err;

			callback(obj);
		});
	},

	prepareData: function (data, callback) {
		'use strict';

		var preparedData = {},
				createDate, 
				file, 
				lastindex, 
				sizearray;

		callback = callback || this.submitMedia.bind(this);

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

		callback(preparedData);
	},

	submitMedia: function (data, host, path, port, callback) {
		'use strict';

		var options, 
				req;

		data = JSON.stringify(data);

		host = host || 'localhost';
		path = path || '/api/v1/media';
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
			var str = '';
			response.on('data', function (chunk) {
				// A piece of data has been recieved
			});

			response.on('end', function () {
				// Response has been recieved
				console.log(str);
				if (callback) {
					callback(str);
				}
			});
		});

		req.write(data);
		req.end();
	},

	deleteMedia: function (data, host, path, port, callback) {
		'use strict';

		var options, 
				req;

		data = JSON.stringify(data);

		host = host || 'localhost';
		path = path || '/api/v1/media';
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
			var str = '';
			response.on('data', function (chunk) {
				// A piece of data has been recieved
			});

			response.on('end', function () {
				// Response has been recieved
				console.log(str);
				if (callback) {
					callback(str);
				}
			});
		}).end();
	}
};