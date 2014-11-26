var path	 	= require('path');
var hound 		= require('hound');
var exif	 	= require('exif2');

module.exports = {
	watchDirectory: function (directory, watcher, createCallback, changeCallback, deleteCallback) {
		'use strict';

		var scope = this;
		watcher = watcher || hound.watch(directory);

		watcher.on('create', function(file, stats) {
		  if (createCallback !== undefined) {
		  	createCallback(file);
		  } else {
		  	scope.readExif(file, scope.prepareData, scope);
		  }
		});

		watcher.on('change', function(file, stats) {
		  if (changeCallback !== undefined) {
		  	changeCallback(file);
		  } else {
		  	console.log(file + ' was changed');
		  }
		});

		watcher.on('delete', function(file) {
		  if (deleteCallback !== undefined) {
		  	deleteCallback(file);
		  } else {
		  	console.log(file + ' was deleted');
		  }
		});
	},

	readExif: function (file, callback, scope) {
		'use strict';

		callback = callback || scope.prepareData;

		exif(file, function (err, obj) {
			if (err) throw err;

			callback(obj, scope);
		});
	},

	prepareData: function (data, callback, scope) {
		'use strict';

		var preparedData = {},
				createDate, file, lastindex, sizearray;

		callback = callback || scope.optimizeMedia;

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
		} else if (preparedData.extension.match(/^(mp4|m4v|mov|wmv|avi|mpg|ogv|3gp|3g2|webm)$/)) {
			preparedData.type = 'video';
		} else {
			preparedData.type = 'not allowed';
		}

		callback(preparedData, scope);
	},

	optimizeMedia: function (preparedData, callback, scope) {
		'use strict';

		callback = callback || scope.submitMedia;
	},

	submitMedia: function (preparedData, scope) {
		'use strict';

	}
};