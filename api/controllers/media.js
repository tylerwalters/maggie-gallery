var fs = require('fs'),
		gm = require('gm');

/** 
	* MediaController contains methods are for processing images and making them 
	* web-ready. The processed images should be resized, optimized for the web,
	* and renamed to names the website will use.
	*
	* @namespace MediaController
	*/

(function () {
	var MediaController;

	MediaController = (function (MediaController) {
		'use strict';

		/**
			* Creates images to be used for mobile devices.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {string} filename The image's file name.
			* @param {string} extension The image's extension.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			* @public
			*/
		MediaController.makeImages = function (imagePath, destPath, filename, extension, callback) {
			callback = callback || function (err) {
				if (err)
					throw err;

				console.log('Mobile image created: ' + destPath);
			};

			MediaController.imageMobile(imagePath, destPath + filename + '.' + 'mob' + '.' + extension, callback);
			MediaController.imageDesktop(imagePath, destPath + filename + '.' + 'desk' + '.' + extension, callback);
			MediaController.imageThumb(imagePath, destPath + filename + '.' + 'thumb' + '.' + extension, callback);
			MediaController.imageLarge(imagePath, destPath + filename + '.' + 'large' + '.' + extension, callback);
			MediaController.imageBackground(imagePath, destPath + filename + '.' + 'bg' + '.' + extension, callback);
		};

		/**
			* Deletes previously created images.
			* 
			* @param {string} mediaPath The path to the image to be deleted.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			* @public
			*/
		MediaController.removeMedia = function (mediaPath, callback) {
			callback = callback || function (err) {
				if (err)
					throw err;

				console.log('Successfully deleted image ' + mediaPath);
			};

			fs.exists(mediaPath, function (exists) {
				if (exists) {
					fs.unlink(mediaPath, callback);
				}
			});
		};

		/**
			* Creates images to be used for mobile devices.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			*/
		function imageMobile (imagePath, destPath, callback) {
			gm(imagePath)
				.resize(320)
				.autoOrient()
				.noProfile()
				.write(destPath, callback);
		}

		/**
			* Creates images to be used for desktop devices.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			*/
		function imageDesktop (imagePath, destPath, callback) {
			gm(imagePath)
				.resize(600, 700)
				.autoOrient()
				.noProfile()
				.write(destPath, callback);
		}

		/**
			* Creates images thumbnails.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			*/
		function imageThumb (imagePath, destPath, callback) {
			gm(imagePath)
				.resize(100, 100)
				.crop(100, 100, 0, 0)
				.autoOrient()
				.noProfile()
				.write(destPath, callback);
		}

		/**
			* Creates large images for detail viewing.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			*/
		function imageLarge (imagePath, destPath, callback) {
			gm(imagePath)
				.resize(1100, 1100)
				.autoOrient()
				.noProfile()
				.write(destPath, callback);
		}

		/**
			* Creates images to be used for a background on larger devices.
			* 
			* @param {string} imagePath The path to the full resolution image.
			* @param {string} destPath The directory where the new image will be placed.
			* @param {function} callback Function to run on success.
			* 
			* @memberof MediaController
			*/
		function imageBackground (imagePath, destPath, callback) {
			gm(imagePath)
				.blur(30, 20)
				.resize(800, 800)
				.autoOrient()
				.noProfile()
				.write(destPath, callback);
		}

		return MediaController;
	})({});

	module.exports = MediaController;
})();