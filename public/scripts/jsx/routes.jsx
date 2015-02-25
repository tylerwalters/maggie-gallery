/** @jsx React.DOM */

var data = [
	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
];

var DefaultRoute = Router.DefaultRoute,
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

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('container'))
});