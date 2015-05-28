var express         = require('express'),
    path            = require('path'),
    RouteController = require('./controllers/routes');

module.exports = function (app) {
  var router = express.Router();

  // ==========================================================================
  // API Routes ===============================================================
  // ==========================================================================

  router.get('/', function (req, res) {
    res.json({message: 'Welcome to the API!'});
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

  // Register API Routes ======================================================

  app.use('/api/v1', router);

  // Frontend rRutes ==========================================================

  /* Front End Routes Handled by React */
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
  });
};