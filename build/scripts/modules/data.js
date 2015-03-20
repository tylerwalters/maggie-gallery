var aias = require('aias'),
		_ = require('lodash');

/** 
	* DataService sets data to be used by the application and stores it locally
	* and in sessionStorage. It also includes methods for sorting and filtering
	* the data.
	*
	* @namespace DataService
	*/

module.exports = (function () {
	'use strict';

	var DataService = {},
			_data,
			_chunkedData,
			_chunkIndex = 0,
			_initialized = false;

/**
	* Filters data by user selected tags.
	* 
	* @param {Array} tags The tags to match against.
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Filtered data set.
	* 
	* @memberof DataService
	*/
	DataService.filterByTag = function (tags, data) {
		var matchedSet = [];

		data = data || _data;

		data = data.filter(function (element) {
			matchedSet = _.intersection(element.tags, tags);
			return matchedSet.length > 0;
		});

		return data;
	};

/**
	* Filters data by user selected people.
	* 
	* @param {Array} people The people to match against.
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Filtered data set.
	* 
	* @memberof DataService
	*/
	DataService.filterByPerson = function (people, data) {
		var matchedSet = [];

		data = data || _data;

		data = data.filter(function (element) {
			matchedSet = _.intersection(element.people, people);
			return matchedSet.length > 0;
		});

		return data;
	};

/**
	* Returns subset of data split by setChunkedData.
	* 
	* @param {Number} index The index to select the subset of data.
	* @param {Array} data The array containing subsets of data.
	* @returms {Array} Selected subset of data.
	* 
	* @memberof DataService
	*/
	DataService.getChunkedData = function (index, data) {
		// Each time the default index is used it is incremented by 1
		index = index || _chunkIndex++;
		data = data || _chunkedData;

		return data[index];
	};

/**
	* Returns current data stored in _data.
	* 
	* @returms {Array} Full data set.
	* 
	* @memberof DataService
	*/
	DataService.getData = function () {
		return _data;
	};

/**
	* Filters data to include only photos.
	* 
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Filtered data set.
	* 
	* @memberof DataService
	*/
	DataService.getPhotos = function (data) {
		data = data || _data;

		data = data.filter(function (element) {
			return element.type === 'photo';
		});

		return data;
	};

/**
	* Filters data to include only videos.
	* 
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Filtered data set.
	* 
	* @memberof DataService
	*/
	DataService.getVideos = function (data) {
		data = data || _data;

		data = data.filter(function (element) {
			return element.type === 'video';
		});

		return data;
	};

/**
	* Sets _data to data stored in sessionStorage or retrieved from the database.
	* If sessionStorage.data is not set it will be set to the same data as _data.
	* 
	* @returms {Promise} Promise with full data set.
	* 
	* @memberof DataService
	*/
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

/**
	* Returns an array containing data split into subsets.
	* 
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Data subset.
	* 
	* @memberof DataService
	*/
	DataService.setChunkedData = function (quantity, data) {
		quantity = quantity || 20;
		data = data || _data;

		chunkedData = _.chunk(data, quantity);

		// Reset default chunk variables if operating on full data set
		if (data === _data) {
			_chunkIndex = 0;
			_chunkedData = chunkedData;
		}

		return chunkedData;
	};

/**
	* Sorts data by date.
	* 
	* @param {Array} data The data to be sorted. Defaults to _data.
	* @returms {Array} Sorted data.
	* 
	* @memberof DataService
	*/
	DataService.sortByDate = function (data) {
		data = data || _data;

		data = data.sort(function (a, b) {
			a = new Date(a.date);
			b = new Date(b.date);

			if (a > b) {
				return -1;
			}
			else if (a < b) {
				return 1;
			}
			else {
				return 0;
			}
		});

		return data;
	};

/**
	* Sorts data by date.
	* 
	* @param {Array} data The data to be sorted. Defaults to _data.
	* @returms {Array} Sorted data.
	* 
	* @memberof DataService
	*/
	DataService.sortByDate = function (data) {
		data = data || _data.slice();

		data = data.sort(function (a, b) {
			a = new Date(a.date);
			b = new Date(b.date);

			if (a > b) {
				return -1;
			}
			else if (a < b) {
				return 1;
			}
			else {
				return 0;
			}
		});

		return data;
	};

/**
	* Sorts data into a random order using the Fisher-Yaters shuffle algorithm.
	* 
	* @param {Array} data The data to be sorted. Defaults to _data.
	* @returms {Array} Sorted data.
	* 
	* @memberof DataService
	*/
	DataService.sortByShuffle = function (data) {
		var current,
				temp, 
				random;

		data = data || _data.slice();
		current = data.length;

		while (current) {
			random = Math.floor(Math.random() * current--);
			temp = data[current];
			data[current] = data[random];
			data[random] = temp;
		}

		return data;
	};

/**
	* Converts data object returned from the database to an array for easier
	* filtering and sorting.
	* 
	* @param {Array} data The data to be filtered. Defaults to _data.
	* @returms {Array} Filtered data set.
	* 
	* @memberof DataService
	*/
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