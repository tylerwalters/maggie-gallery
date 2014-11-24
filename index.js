// modules =================================================

var express					= require('express');
var app							= express();
var mongoose				= require('mongoose');
var bodyParser			= require('body-parser');
var methodOverride	= require('method-override');

// configuration ===========================================

/* Database */
var db = require('./api/config/db');
mongoose.connect(db.url);

/* Port */
var port = process.env.PORT || 8080;

/* API Parsing */
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

/* Assets */
app.use(express.static(__dirname + '/public'));

// routes ==================================================

require('./api/routes')(app);

// tasks ===================================================

var tasks = require('./api/controllers/tasks');
tasks.watch(__dirname + '/public/media');

// start app ===============================================

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;