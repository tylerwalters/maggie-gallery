var Router	= require('react-router'),
		Routes	= require('./components/routes');


Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
	var params = state.params;
	React.render(<Handler params={params} />, document.body);
});