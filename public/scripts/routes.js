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
	React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "detail", handler: Detail}), 
		React.createElement(Route, {name: "about", handler: About}), 
		React.createElement(Route, {name: "donate", handler: Donate}), 
		React.createElement(DefaultRoute, {handler: Gallery})
	)
)

Router.run(routes, function (Handler) {
	React.render(React.createElement(Handler, null), document.getElementById('container'))
});