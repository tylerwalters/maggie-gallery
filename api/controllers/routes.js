var db							= require('../config/db'),
		FirebaseClient	= require('firebase-client'),
		firebase;

firebase = new FirebaseClient({
	url: 'https://maggie-gallery.firebaseio.com/',
	auth: db.firebaseSecret
});

/** 
	* RouteController methods handle creating, reading, updating, and deleting data from the
	* database based on API routes. 
	*
	* @namespace RouteController
	*/

(function () {
	var RouteController;

	RouteController = (function (RouteController) {
		'use strict';

		// Media Routes ===============================================================

		/**
			* API GET endpoint for /api/v1/photos.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getMedia = function (req, res) {
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

		/**
			* API GET endpoint for /api/v1/photos.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getPhotos = function (req, res) {
			firebase
				.get('media/photos')
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API GET endpoint for /api/v1/photos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getPhoto = function (req, res) {
			firebase
				.get('media/photos/' + req.params.id)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API POST endpoint for /api/v1/photos.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postPhotos = function (req, res) {
			firebase
				.push('media/photos', req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API PUT endpoint for /api/v1/photos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.putPhoto = function (req, res) {
			firebase
				.update('media/photos/' + req.params.id, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API DELETE endpoint for /api/v1/photos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.deletePhoto = function (req, res) {
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

		/**
			* API GET endpoint for /api/v1/videos.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getVideos = function (req, res) {
			firebase
				.get('media/videos')
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API GET endpoint for /api/v1/videos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getVideo = function (req, res) {
			firebase
				.get('media/videos/' + req.params.id)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API POST endpoint for /api/v1/videos.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postVideos = function (req, res) {
			firebase
				.push('media/videos', req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API PUT endpoint for /api/v1/videos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.putVideo = function (req, res) {
			firebase
				.update('media/videos/' + req.params.id, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API DELETE endpoint for /api/v1/videos/:id.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.deleteVideo = function (req, res) {
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

		/**
			* API POST endpoint for /api/v1/users.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postUsers = function (req, res) {
			var user = new User();

			user.username	= req.body.username;
			user.email		= req.body.email;

			user.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'User added!', data: user });
			});
		};

		/**
			* API GET endpoint for /api/v1/users.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getUsers = function (req, res) {
			User.find({}).sort({date: 'desc'}).exec(function(err, user) {
				if (err)
					res.send(err);

				res.json(user);
			});
		};

		/**
			* API GET endpoint for /api/v1/users/:user.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getUser = function (req, res) {
			User.findOne({'filename' : req.params.file}, function(err, user) {
				if (err)
					res.send(err);

				res.json(user);
			});
		};

		/**
			* API PUT endpoint for /api/v1/users/:user.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.putUser = function (req, res) {
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

		/**
			* API DELETE endpoint for /api/v1/users/:user.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.deleteUser = function (req, res) {
			User.remove({'filename' : req.params.user}, function(err, user) {
				if (err)
					res.send(err);

				res.json({ message: 'Successfully deleted ' + req.params.user });
			});
		};

		/**
			* API POST endpoint for /api/v1/users.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postSendToken = function (req, res) {
			if (err)
					res.send(err);

			res.json({ message: 'Token sent!' });
		};

		/**
			* API POST endpoint for /api/v1/users.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postLogin = function (req, res) {
			if (err)
					res.send(err);

			res.json({ message: 'Login successful!' });
		};

		return RouteController;
	})({});

	module.exports = RouteController;
})();


