/**
 *
 *	Media Controller
 *	These methods are for processing images and making them web-ready. The
 *	processed images should be resized, optimized for the web, and renamed
 *	to names the website will use.
 *
 **/

var fs = require('fs'),
		gm = require('gm');

module.exports = {
	imageMobile: function (imagePath, destPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Mobile image created: ' + destPath);
		};

		gm(imagePath)
			.resize(320)
			.autoOrient()
			.noProfile()
			.write(destPath, callback);
	},

	imageDesktop: function (imagePath, destPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Desktop image created: ' + destPath);
		};

		gm(imagePath)
			.resize(600, 700)
			.autoOrient()
			.noProfile()
			.write(destPath, callback);
	},

	imageThumb: function (imagePath, destPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Thumbnail image created: ' + destPath);
		};

		gm(imagePath)
			.resize(100, 100)
			.crop(100, 100, 0, 0)
			.autoOrient()
			.noProfile()
			.write(destPath, callback);
	},

	imageLarge: function (imagePath, destPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Large image created: ' + destPath);
		};

		gm(imagePath)
			.resize(1100, 1100)
			.autoOrient()
			.noProfile()
			.write(destPath, callback);
	},

	imageBackground: function (imagePath, destPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Background image created: ' + destPath);
		};

		gm(imagePath)
			.blur(30, 20)
			.resize(800, 800)
			.autoOrient()
			.noProfile()
			.write(destPath, callback);
	},

	removeMedia: function (mediaPath, callback) {
		callback = callback || function(err) {
			if (err)
				throw err;

			console.log('Successfully deleted ' + mediaPath);
		};

		fs.exists(mediaPath, function (exists) {
			if (exists) {
				fs.unlink(mediaPath, callback);
			}
		});
	}
};