var request 	= require('supertest'),
		should 		= require('chai').should(),
		express 	= require('express'),
		// mongoose 	= require('mongoose'),
		app				= express(),
		bodyParser			= require('body-parser'),
		methodOverride	= require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

require('../api/routes')(app);

var db = require('./config/db');

describe('API Routing', function() {
	describe('/api/v1/media', function () {
		it('should respond with all media as JSON to a GET request', function (done) {
			request(app)
				.get('/api/v1/media')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.length.should.equal(1);
					res.body[0].title.should.equal('Test Photo');
					res.body[0].type.should.equal('photo');
					res.body[0].tags.should.deep.equal(['test', 'test2', 'asdf']);
					res.body[0].filename.should.equal('test-photo');
					res.body[0].extension.length.should.equal(1);
					res.body[0].extension.should.deep.equal(['jpg']);
					res.body[0].description.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.');
					done();
				});
		});
	});

	describe('/api/v1/photos', function () {
		it('should add new photo to database with a POST request', function (done) {
			var photo = {
				title: 'Test Photo',
				type: 'photo',
				tags: ['test', 'test2', 'asdf'],
				filename: 'test-photo',
				extension: 'jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.'
			};

			request(app)
				.post('/api/v1/photos')
				.send(photo)
				.type('form')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.data.title.should.equal('Test Photo');
					res.body.data.type.should.equal('photo');
					res.body.data.tags.should.deep.equal(['test', 'test2', 'asdf']);
					res.body.data.filename.should.equal('test-photo');
					res.body.data.extension.length.should.equal(1);
					res.body.data.extension.should.deep.equal(['jpg']);
					res.body.data.description.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.');
					done();
				});
		});

		it('should respond with all photo as JSON to a GET request', function (done) {
			request(app)
				.get('/api/v1/photos')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.length.should.equal(1);
					res.body[0].title.should.equal('Test Photo');
					res.body[0].type.should.equal('photo');
					res.body[0].tags.should.deep.equal(['test', 'test2', 'asdf']);
					res.body[0].filename.should.equal('test-photo');
					res.body[0].extension.length.should.equal(1);
					res.body[0].extension.should.deep.equal(['jpg']);
					res.body[0].description.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.');
					done();
				});
		});
	});

	describe('/api/v1/photos/:id', function () {
		it('should edit a specific file with a PUT request', function (done) {
			var photo = {
				title: 'Test Photo 2',
				type: 'photo',
				tags: ['test', 'test2', 'asdf'],
				filename: 'test-photo',
				extension: 'jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.'
			};

			request(app)
				.put('/api/v1/photos/test-photo')
				.send(photo)
				.type('form')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.data.title.should.equal('Test Photo 2');
					res.body.data.type.should.equal('photo');
					res.body.data.tags.should.deep.equal(['test', 'test2', 'asdf']);
					res.body.data.filename.should.equal('test-photo');
					res.body.data.extension.length.should.equal(1);
					res.body.data.extension.should.deep.equal(['jpg']);
					res.body.data.description.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.');
					done();
				});
		});

		it('should respond with a specific file as JSON to a GET request', function (done) {
			request(app)
				.get('/api/v1/photos/test-photo')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.title.should.equal('Test Photo 2');
					res.body.type.should.equal('photo');
					res.body.tags.should.deep.equal(['test', 'test2', 'asdf']);
					res.body.filename.should.equal('test-photo');
					res.body.extension.length.should.equal(1);
					res.body.extension.should.deep.equal(['jpg']);
					res.body.description.should.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.');
					done();
				});
		});

		it('should delete a specific file with a DELETE request', function (done) {
			request(app)
				.delete('/api/v1/photos/test-photo')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.message.should.equal('Successfully deleted entry test-photo');
					done();
				});
		});
	});
});