// Database Schemas ===========================================================

var Media		= require('../models/media');
var User		= require('../models/user');

// Media Routes ===========================================================

/* API POST endpoint for /api/v1/media */
exports.postMedia = function(req, res) {
	var media = new Media();

	media.title				= req.body.title;
	media.type				= req.body.type;
	media.tags				= req.body.tags;
	media.pubdate			= req.body.pubdate;
	media.editdate		= req.body.editdate;
	media.filename		= req.body.filename;
	media.extension		= req.body.extension;
	media.description	= req.body.description;

	media.save(function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'File added!', data: media });
	});
};

/* API GET endpoint for /api/v1/media */
exports.getMedia = function(req, res) {
	Media.find({}).sort({date: 'desc'}).exec(function(err, media) {
		if (err)
			res.send(err);

		res.json(media);
	});
};

/* API GET endpoint for /api/v1/media/:file */
exports.getFile = function(req, res) {
	Media.findOne({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		res.json(file);
	});
};

/* API PUT endpoint for /api/v1/media/:file */
exports.putFile = function(req, res) {
	Media.findOne({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		file.title				= req.body.title;
		file.type					= req.body.type;
		file.tags					= req.body.tags;
		file.pubdate			= req.body.pubdate;
		file.editdate			= req.body.editdate;
		file.filename			= req.body.filename;
		file.extension		= req.body.extension;
		file.description	= req.body.description;

		file.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'File updated!', data: file });
		});
	});
};

/* API DELETE endpoint for /api/v1/media/:file */
exports.deleteFile = function(req, res) {
	Media.remove({'filename' : req.params.file}, function(err, file) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted ' + req.params.file });
	});
};

// User Routes ===========================================================

/* API POST endpoint for /api/v1/users */
exports.postUsers = function(req, res) {
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
exports.getUsers = function(req, res) {
	User.find({}).sort({date: 'desc'}).exec(function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

/* API GET endpoint for /api/v1/users/:user */
exports.getUser = function(req, res) {
	User.findOne({'filename' : req.params.file}, function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
};

/* API PUT endpoint for /api/v1/users/:user */
exports.putUser = function(req, res) {
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
exports.deleteUser = function(req, res) {
	User.remove({'filename' : req.params.user}, function(err, user) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted ' + req.params.user });
	});
};