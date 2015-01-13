var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

var MediaSchema = new Schema({
	title: {type: String, required: true },			// Photo or image title
	type: {type: String, required: true },			// Photo or Video
	tags: {type: Array },												// Smiling, Sleeping, Disneyland, etc
	pubdate: {type: Date, default: Date.now },	// Initial publish date
	editdate: {type: Date, default: Date.now },	// Date of last update
	filename: {type: String, required: true },	// Photo or video filename
	extension: {type: Array, required: true },	// jpg, png, etc
	description: {type: String},								// Description of photo or video
	dimensions: {type: String},									// Width by height dimensions in pixels
	width: {type: Number},											// Width in pixels
	height: {type: Number}											// Height in pixels
});

module.exports = mongoose.model('Media', MediaSchema);