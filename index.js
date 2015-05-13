// modules =================================================

var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    MediaTasks     = require('./api/controllers/tasks'),
    mediaDir;

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

mediaDir = (process.env.APP_DIR) ? process.env.APP_DIR + '/media' : __dirname + '/public/media';
MediaTasks.watchDirectory(mediaDir);

// start app ===============================================

app.listen(port);
console.log('Listening on port ' + port);
exports = module.exports = app;