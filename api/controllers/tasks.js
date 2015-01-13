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
			else {
				console.log(file + ' was changed');
			}
		});

		watcher.on('delete', function(file) {
			if (deleteCallback !== undefined) {
				deleteCallback(file);
			} 
			else {
				console.log(file + ' was deleted');
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
				createDate, file, lastindex, sizearray;

		callback = callback || this.submitMedia.bind(this);

		createDate = data['create date'].split(' ');
		createDate[0] = createDate[0].replace(/[:]/g, '-');
		createDate = createDate.join('T');
		preparedData.date = new Date(createDate);

		file = data['file name'];
		lastindex = file.lastIndexOf('.');

		preparedData.extension = file.substr(lastindex + 1);
		preparedData.fileName = file.substr(0, file.length - preparedData.extension.length - 1);

		preparedData.dimensions = data['image size'];

		sizearray = (preparedData.dimensions) ? preparedData.dimensions.split('x') : [];

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

	submitMedia: function (preparedData) {
		'use strict';

		var options, req;

		options = {
			host: 'mags.rocks',
			path: '/api/v1/media',
			method: 'POST'
		};

		req = http.request(options, function () {
			var str = '';
			response.on('data', function (chunk) {
				str += chunk;
			});

			response.on('end', function () {
				console.log(str);
			});
		});

		req.write(preparedData);
		req.end();
	}
};