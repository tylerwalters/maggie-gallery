var Router 	= require('react-router'),
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

module.exports = routes;