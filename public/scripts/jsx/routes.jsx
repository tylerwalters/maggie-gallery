// var data = [
// 	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
// 	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
// ];

var Isotope = require('isotope-layout'),
		Router 	= require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Link = Router.Link,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		routes;

routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="detail" handler={Detail}/>
		<Route name="about" handler={About}/>
		<Route name="donate" handler={Donate}/>
		<DefaultRoute handler={Gallery}/>
	</Route>
)

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});

(function() {

	var gallery = document.querySelector('#gallery');

	var iso = new Isotope(gallery, {
		itemSelector: '.gallery__image',
		masonry: {
			columnWidth: 100,
			gutter: 0,
			isFitWidth: true
		}
	});

})();

// React.render(<App />, document.getElementById('container'));