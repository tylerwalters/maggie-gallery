var Router 	= require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Link = Router.Link,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		routes,
		Index = require('./index'),
		Detail = require('./detail'),
		About = require('./about'),
		Donate = require('./donate'),
		Gallery = require('./gallery');

routes = (
	<Route name="index" path="/" handler={Index}>
		<Route name="detail" handler={Detail}/>
		<Route name="about" handler={About}/>
		<Route name="donate" handler={Donate}/>
		<DefaultRoute handler={Gallery}/>
	</Route>
)

module.exports = routes;