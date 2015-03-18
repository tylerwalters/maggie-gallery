var Router 	= require('react-router'),
		Routes = require('./components/routes'),
		imagesLoaded = require('imagesloaded');


Router.run(Routes, Router.HistoryLocation, function (Handler) {
	var data = data;
	React.render(<Handler />, document.body);
});