var express					= require('express'),
		path						= require('path'),
		passwordless		= require('passwordless'),
		RouteController	= require('./controllers/routes');
		//AuthController	= require('./controllers/auth');

module.exports = function(app) {
	var router = express.Router();
	// ==========================================================================
	// API Routes ===============================================================
	// ==========================================================================

	router.get('/', function (req, res) {
		res.json({ message: 'Welcome to the API!' });
	});

	// Media Routes =============================================================

	// API route handlers for /media
	router.route('/media')
		.get(RouteController.getMedia);

	// Photo Routes =============================================================
	// API route handlers for /photos
	router.route('/photos')
		.get(RouteController.getPhotos);

	// API route handlers for /photos/:filename
	router.route('/photos/:filename')
		.get(RouteController.getPhoto)
		.post(RouteController.postPhoto)
		.put(RouteController.putPhoto)
		.delete(RouteController.deletePhoto);

	// Video Routes =============================================================

	// API route handlers for /videos
	router.route('/videos')
		.get(RouteController.getVideos);

	// API route handlers for /photos/:filename
	router.route('/videos/:filename')
		.get(RouteController.getVideo)
		.post(RouteController.postVideo)
		.put(RouteController.putVideo)
		.delete(RouteController.deleteVideo);

	// User Routes ==============================================================

	// API route handlers for /users
	router.route('/users')
		// .post(passwordless.restricted, RouteController.postUsers)
		.post(RouteController.postUsers)
		.get(RouteController.getUsers);

	// API route handlers for /users/:user
	router.route('/users/:user')
		.get(RouteController.getUser)
		// .put(passwordless.restricted, RouteController.putUser)
		// .delete(passwordless.restricted, RouteController.deleteUser);
		.put(RouteController.putUser)
		.delete(RouteController.deleteUser);

	// API route handlers for /sendtoken
	router.route('/sendtoken')
		//.post(AuthController.requestToken, RouteController.postSendToken);
		.post(RouteController.postSendToken);

	// API route handlers for /login
	router.route('/login')
		//.post(passwordless.acceptToken, RouteController.postLogin);
		.post(RouteController.postLogin);

	// API route handlers for /logout
	router.route('/logout')
		// .post(passwordless.logout);
		.post();


	// Register API Routes ======================================================

	app.use('/api/v1', router);

	// Frontend rRutes ==========================================================

	/* Front End Routes Handled by Angular */
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
	});
};