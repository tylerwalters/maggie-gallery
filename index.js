// modules =================================================

var express					= require('express'),
		app							= express(),
		bodyParser			= require('body-parser'),
		methodOverride	= require('method-override'),
		MediaTasks			= require('./api/controllers/tasks');

// configuration ===========================================

/* Port */
var port = process.env.PORT || 8080;

/* API Parsing */
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

/* Assets */
app.use(express.static(__dirname + '/public'));

// routes ==================================================

require('./api/routes')(app);

// tasks ===================================================

MediaTasks.watchDirectory(__dirname + '/public/media');

// start app ===============================================

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;