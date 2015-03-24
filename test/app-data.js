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
				type: "photo",
				width: 1840
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
		filteredData[1].title.should.equal("IMAG0717");
		filteredData[2].title.should.equal("IMAG0720");
		filteredData[3].title.should.equal("IMAG0745");

		tags = ["disneyland"];
		filteredData = DataService.filterByTag(tags, data);

		filteredData.length.should.equal(3);
		filteredData[0].title.should.equal("2012-07-31_13-18-45_503");
		filteredData[1].title.should.equal("IMAG0720");
		filteredData[2].title.should.equal("IMAG0745");
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
		firstChunk[1].title.should.equal("IMAG0712");
		firstChunk[2].title.should.equal("IMAG0717");

		secondChunk[0].title.should.equal("IMAG0720");
		secondChunk[1].title.should.equal("IMAG0736");
		secondChunk[2].title.should.equal("IMAG0745");

		thirdChunk[0].title.should.equal("IMAG0751");
	});

	it('should get data with DataService.getData()', function () {
		var returnedData = DataService.getData(data);

		returnedData.length.should.equal(7);

		returnedData[0].title.should.equal("2012-07-31_13-18-45_503");
		returnedData[1].title.should.equal("IMAG0712");
		returnedData[2].title.should.equal("IMAG0717");
		returnedData[3].title.should.equal("IMAG0720");
		returnedData[4].title.should.equal("IMAG0736");
		returnedData[5].title.should.equal("IMAG0745");
		returnedData[6].title.should.equal("IMAG0751");
	});

});