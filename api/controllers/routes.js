// Database Schemas ===========================================================

var Media		= require('../models/media');

// Post Routes ===========================================================

/* API POST endpoint for /api/v1/media */
exports.postMedia = function(req, res) {
	var media = new Media();

	console.log(req.body)

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

/* API PUT endpoint for /api/v1/media/:file */
exports.putMedia = function(req, res) {
	Media.findOne({'filename' : req.params.file}, function(err, media) {
		if (err)
			res.send(err)

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

			res.json({ message: 'File updated!', data: media });
		});
	});
};

/* API DELETE endpoint for /api/v1/media/:file */
exports.deleteMedia = function(req, res) {
	Media.remove({'filename' : req.params.file}, function(err, media) {
		if (err)
			res.send(err);

		res.json({ message: 'Successfully deleted ' + req.params.file });
	})
};