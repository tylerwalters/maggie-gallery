/**
 *
 *	Route Controller
 *	These methods handle creating, reading, updating, and deleting data from the
 *	database based on API routes. 
 *
 **/

// Database Schemas ===========================================================

var Media		= require('../models/media');
var User		= require('../models/user');

// Media Routes ===========================================================

/* API POST endpoint for /api/v1/media */
exports.postMedia = function (req, res) {
	var media = new Media();

	media.title				= req.body.title;
	media.type				= req.body.type;
	media.tags				= req.body.tags;
	media.date				= req.body.date;
	media.pubdate			= req.body.pubdate;
	media.editdate		= req.body.editdate;
	media.filename		= req.body.filename;
	media.extension		= req.body.extension;
	media.description	= req.body.description;
	media.dimensions	= req.body.dimensions;
	media.width				= req.body.width;
	media.height			= req.body.height;
	media.layout			= req.body.layout;

	media.save(function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'File added!', data: media });
	});
};

/* API GET endpoint for /api/v1/media */
exports.getMedia = function (req, res) {
	Media.find({}).sort({date: 'desc'}).exec(function(err, media) {
		if (err)
			res.send(err);

		res.json(media);
	});
};

/* API GET endpoint for /api/v1/media/:file */
exports.getFile = function (req, res) {
	Media.findOne({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		res.json(file);
	});
};

/* API PUT endpoint for /api/v1/media/:file */
exports.putFile = function (req, res) {
	Media.findOne({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		file.title				= req.body.title;
		file.type					= req.body.type;
		file.tags					= req.body.tags;
		file.date					= req.body.date;
		file.pubdate			= req.body.pubdate;
		file.editdate			= req.body.editdate;
		file.filename			= req.body.filename;
		file.extension		= req.body.extension;
		file.description	= req.body.description;
		file.dimensions		= req.body.dimensions;
		file.width				= req.body.width;
		file.height				= req.body.height;
		file.layout				= req.body.layout;

		file.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'File updated!', data: file });
		});
	});
};

/* API DELETE endpoint for /api/v1/media/:file */
exports.deleteFile = function (req, res) {
	Media.remove({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted ' + req.params.file });
	});
};

/* API GET endpoint for /api/v1/photos */
exports.getPhotos = function (req, res) {
	Media.find({'type' : 'photo'}).sort({date: 'desc'}).exec(function(err, photos) {
		if (err)
			res.send(err);

		res.json(photos);
	});
};

/* API GET endpoint for /api/v1/videos */
exports.getVideos = function (req, res) {
	Media.find({'type' : 'video'}).sort({date: 'desc'}).exec(function(err, videos) {
		if (err)
			res.send(err);

		res.json(videos);
	});
};

// User Routes ===========================================================

/* API POST endpoint for /api/v1/users */
exports.postUsers = function (req, res) {
	var user = new User();

	user.username	= req.body.username;
	user.email		= req.body.email;

	user.save(function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'File added!', data: user });
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

			res.json({ message: 'File updated!', data: user });
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