var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

var MediaSchema = new Schema({
	title: { type: String, required: true },				// Photo or image title
	type: { type: String, required: true },					// Photo or Video
	tags: Array,																		// Smiling, Sleeping, Disneyland, etc
	pubdate: { type: Date, default: Date.now },			// Initial publish date
	editdate: { type: Date, default: Date.now },		// Date of last update
	filename: { type: String, required: true },			// Photo or video filename
	description: { type: String, required: true }		// Description of photo or video
});

module.exports = mongoose.model('Media', MediaSchema);