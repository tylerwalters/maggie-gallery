var aias = require('aias'),
		_ = require('lodash');

/** 
	* DataService tasks watch the media directory for new, changed, or deleted images
	* and videos. It reads exif data from new media, converts the data into 
	* something usable, adds it to the database, and passes the passes it to the
	* media controller for processing. Deleted media is removed from the database.
	*
	* @namespace DataService
	*/

module.exports = (function () {
	'use strict';

	var DataService = {},
			_data,
			_initialized = false;

	DataService.filterByTag = function (tags, data) {
		var matchedSet = [];

		data = data || _data;

		data = data.filter(function (element) {
			matchedSet = _.intersection(element.tags, tags);
			return matchedSet.length > 0;
		});

		return data;
	};

	DataService.filterByPerson = function (people, data) {
		var matchedSet = [];

		data = data || _data;

		data = data.filter(function (element) {
			matchedSet = _.intersection(element.people, people);
			return matchedSet.length > 0;
		});

		return data;
	};

	DataService.getPhotos = function (data) {
		data = data || _data;

		data = data.filter(function (element) {
			return element.type === 'photo';
		});

		console.log("photos");
		console.log(data);

		return data;
	};

	DataService.getVideos = function (data) {
		data = data || _data;

		data = data.filter(function (element) {
			return element.type === 'video';
		});

		return data;
	};

	DataService.getData = function () {
		return _data;
	};

	function _parseData (data) {
		var dataArray = [],
				photo, video;

		for (photo in data.photos) {
			dataArray.push(data.photos[photo]);
		}

		for (video in data.videos) {
			dataArray.push(data.videos[video]);
		}

		return dataArray;
	}

	DataService.setData = function () {
		// return new Promise (function () {
		// 	aias.get('http://localhost:8080/api/v1/media').then(function (res, req) {
		// 		console.log('test2');
		// 		sessionStorage.setItem('data', JSON.stringify(res));
		// 		_data = _parseData(res);
		// 		fulfill(_data);
		// 	});
		// });
		aias.get('http://localhost:8080/api/v1/media').then(function (res, req) {
			sessionStorage.setItem('data', JSON.stringify(res));
			_data = _parseData(res);
			return res;
		});
	};

	return DataService;
})();