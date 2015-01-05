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
		mongoose.createConnection(db.url);
		done();
  });

	describe('Media', function () {
		it('should add new photo to database with call to POST /api/v1/media', function (done) {
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
						// throw err;
						console.log(err);
						done();
					}

					res.status.should.equal(200);
					done();
				});


				
		});

		it('should respond to GET /api/v1/media with all media as JSON', function (done) {
			request(app)
				.get('/api/v1/media')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					console.log(res);

					res.status.should.equal(200);
					done();
				});
		});


	});

	describe('Photos', function () {
		it('should respond to GET /api/v1/photos with all photos as JSON', function (done) {
			request(app)
				.get('/api/v1/photos')
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						throw err;
					}

					res.status.should.equal(200);
					done();
				});
		});
	});

	describe('Videos', function () {

	});

	describe('Users', function () {

	});
});