var express = require('express');
var path	= require('path');

module.exports = function(app) {
	var router = express.Router();
	// API routes ===========================================================

	

	// frontend routes ===========================================================

	/* Front End Routes Handled by Angular */
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
	});
};