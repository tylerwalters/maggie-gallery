var express					= require('express'),
		path						= require('path'),
		RouteController = require('./controllers/routes');

module.exports = function(app) {
	var router = express.Router();
	// API routes ===========================================================

	router.get('/', function (req, res) {
		res.json({ message: 'Welcome to the API!' });
	});

	// API route handlers for /media
	router.route('/media')
		// .post(passwordless.restricted, RouteController.postMedia)
		.post(RouteController.postMedia)
		.get(RouteController.getMedia);

	// API route handlers for /media/:file
	router.route('/media/:file')
		.get(RouteController.getFile)
		// .put(passwordless.restricted, RouteController.putFile)
		// .delete(passwordless.restricted, RouteController.deleteFile);
		.put(RouteController.putFile)
		.delete(RouteController.deleteFile);

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

	// API route handlers for /login
	router.route('/login')
		// .post(passwordless.sendtoken);
		.post();

	// API route handlers for /logout
	router.route('/logout')
		// .post(passwordless.logout);
		.post();


	/* Register API Routes */
	app.use('/api/v1', router);

	// frontend routes ===========================================================

	/* Front End Routes Handled by Angular */
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
	});
};