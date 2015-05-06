var FirebaseClient	= require('firebase-client'),
		firebase;

firebase = new FirebaseClient({
	url: 'https://maggie-gallery.firebaseio.com/',
	auth: process.env.FIREBASE_SECRET
});

/** 
	* RouteController methods handle creating, reading, updating, and deleting
	* data from the database based on API routes. 
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
			* API GET endpoint for /api/v1/photos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getPhoto = function (req, res) {
			firebase
				.get('media/photos/' + req.params.filename)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API POST endpoint for /api/v1/photos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postPhoto = function (req, res) {
			firebase
				.set('media/photos/' + req.params.filename, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API PUT endpoint for /api/v1/photos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.putPhoto = function (req, res) {
			firebase
				.update('media/photos/' + req.params.filename, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API DELETE endpoint for /api/v1/photos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.deletePhoto = function (req, res) {
			firebase
				.delete('media/photos/' + req.params.filename)
				.then(function () {
					res.json({ message: 'Successfully deleted entry ' + req.params.filename });
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
			* API GET endpoint for /api/v1/videos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.getVideo = function (req, res) {
			firebase
				.get('media/videos/' + req.params.filename)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API POST endpoint for /api/v1/videos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.postVideo = function (req, res) {
			firebase
				.set('media/videos/' + req.params.filename, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API PUT endpoint for /api/v1/videos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.putVideo = function (req, res) {
			firebase
				.update('media/videos/' + req.params.filename, req.body)
				.then(function (data) {
					res.json(data);
				})
				.fail(function (err) {
					res.send(err);
				});
		};

		/**
			* API DELETE endpoint for /api/v1/videos/:filename.
			* 
			* @param {object} req The Express request object.
			* @param {object} res The Express response object.
			* 
			* @memberof MediaController
			* @public
			*/
		RouteController.deleteVideo = function (req, res) {
			firebase
			.delete('media/videos/' + req.params.filename)
			.then(function () {
				res.json({ message: 'Successfully deleted entry ' + req.params.filename });
			})
			.fail(function (err) {
				res.send(err);
			});
		};

		return RouteController;
	})({});

	module.exports = RouteController;
})();


