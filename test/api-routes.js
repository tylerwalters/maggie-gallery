var request 	= require('supertest'),
		should 		= require('chai').should(),
		express 	= require('express'),
		mongoose 	= require('mongoose'),
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
	before(function(done) {
		mongoose.connect(db.url);
		done();
  });

	describe('Media', function () {
		it('POST /api/v1/media should add new media to database', function (done) {
			var photo = {
				title: 'Test Photo',
				type: 'photo',
				tags: ['test', 'test2', 'asdf'],
				filename: 'test-photo',
				extension: 'jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.'
			};

			request(app)
				.post('/api/v1/media')
				.send(photo)
				.type('form')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					// console.log(res.body);

					res.status.should.equal(200);
					res.body.data.title.should.equal('Test Photo');
					res.body.data.filename.should.equal('test-photo');
					done();
				});
		});

		it('GET /api/v1/media should respond with all media as JSON', function (done) {
			request(app)
				.get('/api/v1/media')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					// console.log(res.body);

					res.status.should.equal(200);
					res.body.length.should.equal(1);
					done();
				});
		});

		it('PUT /api/v1/media/:file should edit a specific file', function (done) {
			var photo = {
				title: 'Test Photo 2',
				type: 'photo',
				tags: ['test', 'test2', 'asdf'],
				filename: 'test-photo',
				extension: 'jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus euismod orci, eu tempus turpis dictum in. Phasellus eget consequat lacus.'
			};

			request(app)
				.put('/api/v1/media/test-photo')
				.send(photo)
				.type('form')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					// console.log(res.body);

					res.status.should.equal(200);
					res.body.data.title.should.equal('Test Photo 2');
					res.body.data.filename.should.equal('test-photo');
					done();
				});
		});

		it('GET /api/v1/media/:file should respond with a specific file as JSON', function (done) {
			request(app)
				.get('/api/v1/media/test-photo')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					// console.log(res.body);

					res.status.should.equal(200);
					// res.body.length.should.equal(1);
					done();
				});
		});

		it('DELETE /api/v1/media/:file should delete a specific file', function (done) {
			request(app)
				.delete('/api/v1/media/test-photo')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					res.body.message.should.equal('Successfully deleted test-photo');
					done();
				});
		});
	});

	describe('Videos', function () {

	});

	describe('Users', function () {

	});
});