/**
 *
 *	Route Controller
 *	These methods handle creating, reading, updating, and deleting data from the
 *	database based on API routes. 
 *
 **/

// Database Schemas ===========================================================

var db = require('../config/db'),
		FirebaseClient = require('firebase-client'),
		firebase;

firebase = new FirebaseClient({
	url: 'https://maggie-gallery.firebaseio.com/',
	auth: db.firebaseSecret
});

// Media Routes ===============================================================

/* API GET endpoint for /api/v1/photos */
exports.getMedia = function (req, res) {
	firebase
		.get('media')
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

// Photo Routes ===============================================================

/* API GET endpoint for /api/v1/photos */
exports.getPhotos = function (req, res) {
	firebase
		.get('media/photos')
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API GET endpoint for /api/v1/photos/:id */
exports.getPhoto = function (req, res) {
	firebase
		.get('media/photos/' + req.params.id)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API POST endpoint for /api/v1/photos */
exports.postPhotos = function (req, res) {
	firebase
		.push('media/photos', req.body)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API PUT endpoint for /api/v1/photos/:id */
exports.putPhoto = function (req, res) {
	firebase
		.update('media/photos/' + req.params.id, req.body)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API DELETE endpoint for /api/v1/photos/:id */
exports.deletePhoto = function (req, res) {
	firebase
	.delete('media/photos/' + req.params.id)
	.then(function () {
		res.json({ message: 'Successfully deleted entry ' + req.params.id });
	})
	.fail(function (err) {
		res.send(err);
	});
};

// Video Routes ===============================================================

/* API GET endpoint for /api/v1/videos */
exports.getVideos = function (req, res) {
	firebase
		.get('media/videos')
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API GET endpoint for /api/v1/videos/:id */
exports.getVideo = function (req, res) {
	firebase
		.get('media/videos/' + req.params.id)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API POST endpoint for /api/v1/videos */
exports.postVideos = function (req, res) {
	firebase
		.push('media/videos', req.body)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API PUT endpoint for /api/v1/videos/:id */
exports.putVideo = function (req, res) {
	firebase
		.update('media/videos/' + req.params.id, req.body)
		.then(function (data) {
			res.json(data);
		})
		.fail(function (err) {
			res.send(err);
		});
};

/* API DELETE endpoint for /api/v1/videos/:id */
exports.deleteVideo = function (req, res) {
	firebase
	.delete('media/videos/' + req.params.id)
	.then(function () {
		res.json({ message: 'Successfully deleted entry ' + req.params.id });
	})
	.fail(function (err) {
		res.send(err);
	});
};

// User Routes ================================================================

/* API POST endpoint for /api/v1/users */
exports.postUsers = function (req, res) {
	var user = new User();

	user.username	= req.body.username;
	user.email		= req.body.email;

	user.save(function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'User added!', data: user });
	});
};

/* API GET endpoint for /api/v1/users */
exports.getUsers = function (req, res) {
	User.find({}).sort({date: 'desc'}).exec(function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

/* API GET endpoint for /api/v1/users/:user */
exports.getUser = function (req, res) {
	User.findOne({'filename' : req.params.file}, function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

/* API PUT endpoint for /api/v1/users/:user */
exports.putUser = function (req, res) {
	User.findOne({'filename' : req.params.user}, function(err, user) {
		if (err)
			res.send(err);

		user.username	= req.body.username;
		user.email		= req.body.email;

		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User updated!', data: user });
		});
	});
};

/* API DELETE endpoint for /api/v1/users/:user */
exports.deleteUser = function (req, res) {
	User.remove({'filename' : req.params.user}, function(err, user) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted ' + req.params.user });
	});
};

/* API POST endpoint for /api/v1/users */
exports.postSendToken = function (req, res) {
	if (err)
			res.send(err);

	res.json({ message: 'Token sent!' });
};

/* API POST endpoint for /api/v1/users */
exports.postLogin = function (req, res) {
	if (err)
			res.send(err);

	res.json({ message: 'Login successful!' });
};
