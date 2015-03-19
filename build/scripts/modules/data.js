var aias = require('aias/src/aias'),
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

	DataService.setData = function () {
		var data,
				dataPromise,
				sessionData = JSON.parse(sessionStorage.getItem('data'));

		if (sessionData !== null && sessionData.length !== 0) {
			dataPromise = Promise.resolve(_data = sessionData);
		}
		else {
			dataPromise = Promise.resolve(aias.get('http://localhost:8080/api/v1/media'));
			dataPromise.then(function (res) {
				data = _parseData(res);
				sessionStorage.setItem('data', JSON.stringify(data));
				_data = data;
			});
		}

		return dataPromise;
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

	return DataService;
})();