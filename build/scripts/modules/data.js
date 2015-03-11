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

	DataService.initialize = function () {
		if (!_initialized) {
			_initialized = true;

			_data = _setData();
			console.log('_data');
			console.log(_data);
		}
	};

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

	function _setData () {
		var data;

		if (sessionStorage.data) {
			data = sessionStorage.getItem('data');
			data = JSON.parse(data);
			_parseData(data);
			return data;
		}
		else {
			aias.get('http://localhost:8080/api/v1/media').then(function (res, req) {
				sessionStorage.setItem('data', JSON.stringify(res));
				data = _parseData(res);
			});
			return data;
		}
	}

	return DataService;
})();