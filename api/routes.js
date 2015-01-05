var express					= require('express'),
		path						= require('path'),
		RouteController = require('./controllers/routes');
		// AuthController 	= require('./controllers/auth');

module.exports = function(app) {
	var router = express.Router();
	// API routes ===========================================================

	router.get('/', function(req, res) {
		res.json({ message: 'Welcome to the API!' });
	});

	// API route handlers for /posts/articles
	router.route('/media')
		.post(RouteController.postMedia)
		.get(RouteController.getMedia);

	// API route handlers for /posts/articles
	router.route('/media/:file')
		.put(RouteController.putMedia)
		.delete(RouteController.deleteMedia);

	/* Register API Routes */
	app.use('/api/v1', router);

	// frontend routes ===========================================================

	/* Front End Routes Handled by Angular */
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
	});
};