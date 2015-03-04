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
	React.createElement(Route, {name: "index", path: "/", handler: Index}, 
		React.createElement(Route, {name: "detail", handler: Detail}), 
		React.createElement(Route, {name: "about", handler: About}), 
		React.createElement(Route, {name: "donate", handler: Donate}), 
		React.createElement(DefaultRoute, {handler: Gallery})
	)
)

module.exports = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3JvdXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciBcdD0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0RGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZSxcblx0XHRMaW5rID0gUm91dGVyLkxpbmssXG5cdFx0Um91dGUgPSBSb3V0ZXIuUm91dGUsXG5cdFx0Um91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcixcblx0XHRyb3V0ZXMsXG5cdFx0SW5kZXggPSByZXF1aXJlKCcuL2luZGV4JyksXG5cdFx0RGV0YWlsID0gcmVxdWlyZSgnLi9kZXRhaWwnKSxcblx0XHRBYm91dCA9IHJlcXVpcmUoJy4vYWJvdXQnKSxcblx0XHREb25hdGUgPSByZXF1aXJlKCcuL2RvbmF0ZScpLFxuXHRcdEdhbGxlcnkgPSByZXF1aXJlKCcuL2dhbGxlcnknKTtcblxucm91dGVzID0gKFxuXHQ8Um91dGUgbmFtZT1cImluZGV4XCIgcGF0aD1cIi9cIiBoYW5kbGVyPXtJbmRleH0+XG5cdFx0PFJvdXRlIG5hbWU9XCJkZXRhaWxcIiBoYW5kbGVyPXtEZXRhaWx9Lz5cblx0XHQ8Um91dGUgbmFtZT1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cblx0XHQ8Um91dGUgbmFtZT1cImRvbmF0ZVwiIGhhbmRsZXI9e0RvbmF0ZX0vPlxuXHRcdDxEZWZhdWx0Um91dGUgaGFuZGxlcj17R2FsbGVyeX0vPlxuXHQ8L1JvdXRlPlxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiXSwiZmlsZSI6ImNvbXBvbmVudHMvcm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=