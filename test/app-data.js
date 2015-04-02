window = {}; // DataService has a dependency that uses the window object so I'm faking it.

var should 			= require('chai').should(),
		DataService = require('../build/scripts/modules/data'),
		data;

describe('Data Service', function () {
	before(function() {
		data = [
			{
				date: "2012-07-31T13:18:43.000Z",
				description: "",
				dimensions: "2592x1456",
				extension: "jpg",
				filename: "2012-07-31_13-18-45_503",
				height: 1456,
				layout: "landscape",
				tags: ["disneyland", "smiling", "eyes open"],
				people: ["amanda"],
				title: "2012-07-31_13-18-45_503",
				type: "photo",
				width: 2592
			},
			{
				date: "2013-11-28T13:24:23.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0745",
				height: 3264,
				layout: "portrait",
				tags: ["disneyland", "eyepatch", "sleeping"],
				people: [],
				title: "IMAG0745",
				type: "photo",
				width: 1840
			},
			{
				date: "2013-11-08T12:21:41.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0712",
				height: 3264,
				layout: "portrait",
				tags: ["home", "sleeping", "rocking"],
				people: ["amanda", "marie"],
				title: "IMAG0712",
				type: "photo",
				width: 1840
			},
			{
				date: "2013-11-08T16:02:52.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0717",
				height: 3264,
				layout: "portrait",
				tags: ["bath", "smiling"],
				people: [],
				title: "IMAG0717",
				type: "photo",
				width: 1840
			},
			{
				date: "2013-11-09T11:02:57.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0720",
				height: 3264,
				layout: "portrait",
				tags: ["disneyland", "princess dress", "pacifier"],
				people: ["tyler"],
				title: "IMAG0720",
				type: "photo",
				width: 1840
			},
			{
				date: "2013-11-15T13:35:24.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0736",
				height: 3264,
				layout: "portrait",
				tags: ["cabin", "sunglasses", "outside"],
				people: ["rhonda", "charlie", "marie"],
				title: "IMAG0736",
				type: "video",
				width: 1840
			},
			{
				date: "2013-11-28T14:49:47.000Z",
				description: "",
				dimensions: "1840x3264",
				extension: "jpg",
				filename: "IMAG0751",
				height: 3264,
				layout: "portrait",
				tags: ["christmas", "cousins"],
				people: ["zoey", "lilly"],
				title: "IMAG0751",
				type: "photo",
				width: 1840
			}
		];
	});

	it('should filter data by tags selected with DataService.filterByTag()', function () {
		var filteredData, tags;

		tags = ["disneyland", "smiling"];
		filteredData = DataService.filterByTag(tags, data);

		filteredData.length.should.equal(4);
		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0745");
		filteredData[2].title.should.equal("IMAG0717");
		filteredData[3].title.should.equal("IMAG0720");

		tags = ["disneyland"];
		filteredData = DataService.filterByTag(tags, data);

		filteredData.length.should.equal(3);
		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0745");
		filteredData[2].title.should.equal("IMAG0720");
	});

	it('should filter data by people selected with DataService.filterByPerson()', function () {
		var filteredData, people;

		people = ["amanda", "marie"];
		filteredData = DataService.filterByPerson(people, data);

		filteredData.length.should.equal(3);
		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0712");
		filteredData[2].title.should.equal("IMAG0736");

		people = ["amanda"];
		filteredData = DataService.filterByPerson(people, data);

		filteredData.length.should.equal(2);
		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0712");
	});

	it('should get a subset of the data by people selected with DataService.getChunkedData()', function () {
		var chunkedData, firstChunk, secondChunk, thirdChunk;

		chunkedData = DataService.setChunkedData(3, data);
		firstChunk = DataService.getChunkedData(chunkedData, 0);
		secondChunk = DataService.getChunkedData(chunkedData, 1);
		thirdChunk = DataService.getChunkedData(chunkedData, 2);

		firstChunk.length.should.equal(3);
		secondChunk.length.should.equal(3);
		thirdChunk.length.should.equal(1);

		firstChunk[0].title.should.equal("2012-07-31_13-18-45_503");
		firstChunk[1].title.should.equal("IMAG0745");
		firstChunk[2].title.should.equal("IMAG0712");

		secondChunk[0].title.should.equal("IMAG0717");
		secondChunk[1].title.should.equal("IMAG0720");
		secondChunk[2].title.should.equal("IMAG0736");

		thirdChunk[0].title.should.equal("IMAG0751");
	});

	it('should get data with DataService.getData()', function () {
		var returnedData = DataService.getData(data);

		returnedData.length.should.equal(7);

		returnedData[0].title.should.equal("2012-07-31_13-18-45_503");
		returnedData[1].title.should.equal("IMAG0745");
		returnedData[2].title.should.equal("IMAG0712");
		returnedData[3].title.should.equal("IMAG0717");
		returnedData[4].title.should.equal("IMAG0720");
		returnedData[5].title.should.equal("IMAG0736");
		returnedData[6].title.should.equal("IMAG0751");
	});

	it('should get single item with DataService.getItem()', function () {
		var returnedData = DataService.getItem('2012-07-31_13-18-45_503', data);

		returnedData.length.should.equal(1);
		returnedData[0].title.should.equal('2012-07-31_13-18-45_503');

		returnedData = DataService.getItem('IMAG0745', data);

		returnedData.length.should.equal(1);
		returnedData[0].title.should.equal('IMAG0745');
	});

	it('should filter data to include only photos with DataService.getPhotos()', function () {
		var filteredData = DataService.getPhotos(data);

		filteredData.length.should.equal(6);

		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0745");
		filteredData[2].title.should.equal("IMAG0712");
		filteredData[3].title.should.equal("IMAG0717");
		filteredData[4].title.should.equal("IMAG0720");
		filteredData[5].title.should.equal("IMAG0751");
	});

	it('should filter data to include only videos with DataService.getVideos()', function () {
		var filteredData = DataService.getVideos(data);

		filteredData.length.should.equal(1);

		filteredData[0].title.should.equal("IMAG0736");
	});

	// it('should set data to match data stored in sessionStorage if it is available with DataService.setData()', function () {
	// 	var setData;

	// 	sessionStorage = {};
	// 	sessionStorage.data = JSON.stringify(data);
	// 	sessionStorage.getItem = function (item) {
	// 		return sessionStorage[item];
	// 	};

	// 	setData = DataService.setData().then(function (res, req) {
	// 		setData.length.should.equal(7);

	// 		setData[0].title.should.equal("2012-07-31_13-18-45_503");
	// 		setData[1].title.should.equal("IMAG0712");
	// 		setData[2].title.should.equal("IMAG0717");
	// 		setData[3].title.should.equal("IMAG0720");
	// 		setData[4].title.should.equal("IMAG0736");
	// 		setData[5].title.should.equal("IMAG0745");
	// 		setData[6].title.should.equal("IMAG0751");
	// 	});
	// });

	it('should split data into subsets containing the specified number of items with DataService.setChunkedData()', function () {
		var chunkedData;

		chunkedData = DataService.setChunkedData(3, data);

		chunkedData.length.should.equal(3);

		chunkedData[0].length.should.equal(3);
		chunkedData[1].length.should.equal(3);
		chunkedData[2].length.should.equal(1);

		chunkedData[0][0].title.should.equal("2012-07-31_13-18-45_503");
		chunkedData[0][1].title.should.equal("IMAG0745");
		chunkedData[0][2].title.should.equal("IMAG0712");

		chunkedData[1][0].title.should.equal("IMAG0717");
		chunkedData[1][1].title.should.equal("IMAG0720");
		chunkedData[1][2].title.should.equal("IMAG0736");

		chunkedData[2][0].title.should.equal("IMAG0751");
	});

	it('should sort data by date with DataService.sortByDate()', function () {
		var sortedData = DataService.sortByDate(data);

		sortedData.length.should.equal(7);

		sortedData[0].title.should.equal("IMAG0751");
		sortedData[1].title.should.equal("IMAG0745");
		sortedData[2].title.should.equal("IMAG0736");
		sortedData[3].title.should.equal("IMAG0720");
		sortedData[4].title.should.equal("IMAG0717");
		sortedData[5].title.should.equal("IMAG0712");
		sortedData[6].title.should.equal("2012-07-31_13-18-45_503");
	});

	it('should sort data in a random order with DataService.sortByShuffle()', function () {
		var sortedData = DataService.sortByShuffle(data);

		sortedData.length.should.equal(7);

		// sortedData[0].title.should.not.equal("2012-07-31_13-18-45_503");
	});

	it('should sort data by date with DataService.sortByTitle()', function () {
		var sortedData = DataService.sortByTitle(data);

		sortedData.length.should.equal(7);

		sortedData[0].title.should.equal("2012-07-31_13-18-45_503");
		sortedData[1].title.should.equal("IMAG0712");
		sortedData[2].title.should.equal("IMAG0717");
		sortedData[3].title.should.equal("IMAG0720");
		sortedData[4].title.should.equal("IMAG0736");
		sortedData[5].title.should.equal("IMAG0745");
		sortedData[6].title.should.equal("IMAG0751");
	});

});