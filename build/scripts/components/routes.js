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
	React.createElement(Route, {name: "index", path: "/", handler: Index}, 
		React.createElement(Route, {name: "detail", handler: Detail}, 
			React.createElement(Route, {name: "detailItem", path: ":mediaId", handler: Detail})
		), 
		React.createElement(Route, {name: "about", handler: About}), 
		React.createElement(Route, {name: "donate", handler: Donate}), 
		React.createElement(Router.DefaultRoute, {handler: Home})
	)
)

module.exports = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3JvdXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciBcdD0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0SW5kZXggPSByZXF1aXJlKCcuL2luZGV4JyksXG5cdFx0SG9tZSA9IHJlcXVpcmUoJy4uL3BhZ2VzL2hvbWUnKSxcblx0XHREZXRhaWwgPSByZXF1aXJlKCcuLi9wYWdlcy9kZXRhaWwnKSxcblx0XHRBYm91dCA9IHJlcXVpcmUoJy4uL3BhZ2VzL2Fib3V0JyksXG5cdFx0RG9uYXRlID0gcmVxdWlyZSgnLi4vcGFnZXMvZG9uYXRlJyksXG5cdFx0RGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZSxcblx0XHRSb3V0ZSA9IFJvdXRlci5Sb3V0ZSxcblx0XHRyb3V0ZXM7XG5cbnJvdXRlcyA9IChcblx0PFJvdXRlIG5hbWU9XCJpbmRleFwiIHBhdGg9XCIvXCIgaGFuZGxlcj17SW5kZXh9PlxuXHRcdDxSb3V0ZSBuYW1lPVwiZGV0YWlsXCIgaGFuZGxlcj17RGV0YWlsfT5cblx0XHRcdDxSb3V0ZSBuYW1lPVwiZGV0YWlsSXRlbVwiIHBhdGg9XCI6bWVkaWFJZFwiIGhhbmRsZXI9e0RldGFpbH0gLz5cblx0XHQ8L1JvdXRlPlxuXHRcdDxSb3V0ZSBuYW1lPVwiYWJvdXRcIiBoYW5kbGVyPXtBYm91dH0gLz5cblx0XHQ8Um91dGUgbmFtZT1cImRvbmF0ZVwiIGhhbmRsZXI9e0RvbmF0ZX0gLz5cblx0XHQ8Um91dGVyLkRlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lfSAvPlxuXHQ8L1JvdXRlPlxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlczsiXSwiZmlsZSI6ImNvbXBvbmVudHMvcm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=