var Router 	= require('react-router'),
		Routes = require('./components/routes');


Router.run(Routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler />, document.body);
});