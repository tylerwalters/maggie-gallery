var Logo = React.createClass({displayName: "Logo",
	render: function () {
		return (
			React.createElement("div", {className: "header__logo pure-u-1-4"}, 
				React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo"})
			)
		)
	}
});

var Navigation = React.createClass({displayName: "Navigation",
	render: function () {
		return (
			React.createElement("nav", {className: "header__nav pure-u-3-4"}, 
				React.createElement("ul", null, 
					React.createElement("li", null, React.createElement("a", {href: "/"}, "Home")), 
					React.createElement("li", null, React.createElement("a", {href: "/about"}, "About")), 
					React.createElement("li", null, React.createElement("a", {href: "/donate"}, "Donate"))
				)
			)
		)
	}
});

var Header = React.createClass({displayName: "Header",
	render: function () {
		return (
			React.createElement("header", {className: "header pure-g"}, 
				React.createElement(Logo, null), 
				React.createElement(Navigation, null)
			)
		);
	}
});
var GalleryImage = React.createClass({displayName: "GalleryImage",
	render: function () {
		return (
			React.createElement("div", {className: "gallery__image"}, 
				React.createElement("img", {src: this.props.src, alt: this.props.title})
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function (data) {
		return (
			React.createElement("main", {id: "gallery", className: "content pure-g isotope"}, 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"})
			)
		);
	}
});
var DetailImage = React.createClass({displayName: "DetailImage",
	render: function () {
		return (
			React.createElement("div", {className: "header__logo pure-u-1-4"}, 
				React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo", className: "header__logo"})
			)
		);
	}
});

var DetailDescription = React.createClass({displayName: "DetailDescription",
	render: function () {
		return (
			React.createElement("div", {className: "header__logo pure-u-1-4"}, 
				React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo", className: "header__logo"})
			)
		);
	}
});

var Detail = React.createClass({displayName: "Detail",
	render: function (data) {
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement(DetailImage, {src: ""}), 
				React.createElement(DetailDescription, null)
			)
		);
	}
});
var Footer = React.createClass({displayName: "Footer",
	render: function (data) {
		return (
			React.createElement("footer", {className: "content pure-g isotope"}, 
				React.createElement("p", {className: "pure-u-1-1"}, "Test text")
			)
		);
	}
});
var App = React.createClass({displayName: "App",
	render: function () {
		return (
			React.createElement("div", {class: "page"}, 
				React.createElement(Header, null), 
				React.createElement(Gallery, null), 
				React.createElement(Footer, null)
			)
		);
	}
});
// var data = [
// 	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
// 	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
// ];

var Router 	= require('react-router'),
		DefaultRoute = Router.DefaultRoute,
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

// React.render(<App />, document.getElementById('container'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qc3giLCJnYWxsZXJ5LmpzeCIsImRldGFpbC5qc3giLCJmb290ZXIuanN4IiwiYXBwLmpzeCIsInJvdXRlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTG9nbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIE5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2IHB1cmUtdS0zLTRcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvZG9uYXRlXCI+RG9uYXRlPC9hPjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgcHVyZS1nXCI+XG5cdFx0XHRcdDxMb2dvIC8+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uIC8+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgR2FsbGVyeUltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGlkPVwiZ2FsbGVyeVwiIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nIGlzb3RvcGVcIj5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvbW9tLW1hZ2dpZS1hbmQtbWFyaWUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL2dyYW5kcGFyZW50cy1kYXkuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvbW9tLW1hZ2dpZS1hbmQtbWFyaWUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL2dyYW5kcGFyZW50cy1kYXkuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvbW9tLW1hZ2dpZS1hbmQtbWFyaWUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL2dyYW5kcGFyZW50cy1kYXkuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvZ3JhbmRwYXJlbnRzLWRheS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBEZXRhaWxJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWxEZXNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PERldGFpbEltYWdlIHNyYz1cIlwiPjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbj48L0RldGFpbERlc2NyaXB0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZyBpc290b3BlXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInB1cmUtdS0xLTFcIj5UZXN0IHRleHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInBhZ2VcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8R2FsbGVyeSAvPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCIvLyB2YXIgZGF0YSA9IFtcbi8vIFx0e2ZpbGVuYW1lOiBcImdyYW5kcGFyZW50cy1kYXlcIiwgZXh0ZW5zaW9uOiBcImpwZ1wiLCB0eXBlOiBcInBob3RvXCIsIHRpdGxlOiBcImdyYW5kcGFyZW50cy1kYXlcIn0sXG4vLyBcdHtmaWxlbmFtZTogXCJtb20tbWFnZ2llLWFuZC1tYXJpZVwiLCBleHRlbnNpb246IFwianBnXCIsIHR5cGU6IFwicGhvdG9cIiwgdGl0bGU6IFwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIn1cbi8vIF07XG5cbnZhciBSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGUsXG5cdFx0TGluayA9IFJvdXRlci5MaW5rLFxuXHRcdFJvdXRlID0gUm91dGVyLlJvdXRlLFxuXHRcdFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXIsXG5cdFx0cm91dGVzO1xuXG5yb3V0ZXMgPSAoXG5cdDxSb3V0ZSBuYW1lPVwiYXBwXCIgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuXHRcdDxSb3V0ZSBuYW1lPVwiZGV0YWlsXCIgaGFuZGxlcj17RGV0YWlsfS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJkb25hdGVcIiBoYW5kbGVyPXtEb25hdGV9Lz5cblx0XHQ8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0dhbGxlcnl9Lz5cblx0PC9Sb3V0ZT5cbilcblxuUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG5cdFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykpXG59KTtcblxuLy8gUmVhY3QucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9