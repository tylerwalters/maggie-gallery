var Router 	= require('react-router'),
		Index = require('./index'),
		Home = require('../pages/home'),
		Detail = require('../pages/detail'),
		About = require('../pages/about'),
		Donate = require('../pages/donate'),
		DefaultRoute = Router.DefaultRoute,
		Route = Router.Route,
		routes;

routes = (
	<Route name="index" path="/" handler={Index}>
		<Route name="detail" handler={Detail}>
			<Route name="detailItem" path=":mediaId" handler={Detail} />
		</Route>
		<Route name="about" handler={About} />
		<Route name="donate" handler={Donate} />
		<Router.DefaultRoute handler={Home} />
	</Route>
)

module.exports = routes;