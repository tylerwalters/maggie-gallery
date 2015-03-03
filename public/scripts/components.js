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
			React.createElement("div", {className: this.props.className}, 
				React.createElement("img", {src: this.props.src, alt: this.props.title})
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function (data) {
		return (
			React.createElement("main", {id: "gallery", className: "content pure-g isotope"}, 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image gallery__image--w2"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0717.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0720.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0745.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0712.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0751.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0769.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0770.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0790.desk.jpg", title: "grandparents-day", className: "gallery__image gallery__image--w2"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0771.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
				React.createElement(GalleryImage, {src: "../images/2012-07-31_13-18-45_503.desk.jpg", title: "grandparents-day", className: "gallery__image gallery__image--w2"}), 
				React.createElement(GalleryImage, {src: "../images/IMAG0736.desk.jpg", title: "grandparents-day", className: "gallery__image"})
			)
		);
	}
});
var About = React.createClass({displayName: "About",
	render: function (data) {
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("h1", null, "About Maggie"), 
				React.createElement("p", null, "About Maggie.")
			)
		);
	}
});
var Donate = React.createClass({displayName: "Donate",
	render: function (data) {
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("h1", null, "Donate"), 
				React.createElement("p", null, "About Maggie.")
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
				React.createElement(Router.RouteHandler, null), 
				React.createElement(Footer, null)
			)
		);
	}
});
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
	React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "detail", handler: Detail}), 
		React.createElement(Route, {name: "about", handler: About}), 
		React.createElement(Route, {name: "donate", handler: Donate}), 
		React.createElement(DefaultRoute, {handler: Gallery})
	)
)

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(React.createElement(Handler, null), document.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qc3giLCJnYWxsZXJ5LmpzeCIsImFib3V0LmpzeCIsImRvbmF0ZS5qc3giLCJkZXRhaWwuanN4IiwiZm9vdGVyLmpzeCIsImFwcC5qc3giLCJyb3V0ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMb2dvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgTmF2aWdhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXYgcHVyZS11LTMtNFwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9kb25hdGVcIj5Eb25hdGU8L2E+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBwdXJlLWdcIj5cblx0XHRcdFx0PExvZ28gLz5cblx0XHRcdFx0PE5hdmlnYXRpb24gLz5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBHYWxsZXJ5SW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGlkPVwiZ2FsbGVyeVwiIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nIGlzb3RvcGVcIj5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvbW9tLW1hZ2dpZS1hbmQtbWFyaWUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLXcyXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzE3LmRlc2suanBnXCIgdGl0bGU9XCJtb20tbWFnZ2llLWFuZC1tYXJpZVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzIwLmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NDUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3MTIuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc1MS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzY5LmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NzAuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc5MC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlIGdhbGxlcnlfX2ltYWdlLS13MlwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc3MS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzLzIwMTItMDctMzFfMTMtMTgtNDVfNTAzLmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLXcyXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzM2LmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgQWJvdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGgxPkFib3V0IE1hZ2dpZTwvaDE+XG5cdFx0XHRcdDxwPkFib3V0IE1hZ2dpZS48L3A+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIERvbmF0ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8aDE+RG9uYXRlPC9oMT5cblx0XHRcdFx0PHA+QWJvdXQgTWFnZ2llLjwvcD5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgRGV0YWlsSW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nbyBwdXJlLXUtMS00XCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTWFnZ2llIFdhbHRlcnMgTWVkaWEgR2FsbGVyeSBMb2dvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgRGV0YWlsRGVzY3JpcHRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nbyBwdXJlLXUtMS00XCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTWFnZ2llIFdhbHRlcnMgTWVkaWEgR2FsbGVyeSBMb2dvXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgRGV0YWlsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxEZXRhaWxJbWFnZSBzcmM9XCJcIj48L0RldGFpbEltYWdlPlxuXHRcdFx0XHQ8RGV0YWlsRGVzY3JpcHRpb24+PC9EZXRhaWxEZXNjcmlwdGlvbj5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgRm9vdGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWcgaXNvdG9wZVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwdXJlLXUtMS0xXCI+VGVzdCB0ZXh0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlXCI+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PFJvdXRlci5Sb3V0ZUhhbmRsZXIvPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCIvLyB2YXIgZGF0YSA9IFtcbi8vIFx0e2ZpbGVuYW1lOiBcImdyYW5kcGFyZW50cy1kYXlcIiwgZXh0ZW5zaW9uOiBcImpwZ1wiLCB0eXBlOiBcInBob3RvXCIsIHRpdGxlOiBcImdyYW5kcGFyZW50cy1kYXlcIn0sXG4vLyBcdHtmaWxlbmFtZTogXCJtb20tbWFnZ2llLWFuZC1tYXJpZVwiLCBleHRlbnNpb246IFwianBnXCIsIHR5cGU6IFwicGhvdG9cIiwgdGl0bGU6IFwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIn1cbi8vIF07XG5cbnZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGUsXG5cdFx0TGluayA9IFJvdXRlci5MaW5rLFxuXHRcdFJvdXRlID0gUm91dGVyLlJvdXRlLFxuXHRcdFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXIsXG5cdFx0cm91dGVzO1xuXG5yb3V0ZXMgPSAoXG5cdDxSb3V0ZSBuYW1lPVwiYXBwXCIgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuXHRcdDxSb3V0ZSBuYW1lPVwiZGV0YWlsXCIgaGFuZGxlcj17RGV0YWlsfS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJkb25hdGVcIiBoYW5kbGVyPXtEb25hdGV9Lz5cblx0XHQ8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0dhbGxlcnl9Lz5cblx0PC9Sb3V0ZT5cbilcblxuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG5cdFJlYWN0LnJlbmRlcig8SGFuZGxlci8+LCBkb2N1bWVudC5ib2R5KTtcbn0pO1xuXG4oZnVuY3Rpb24oKSB7XG5cblx0dmFyIGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpO1xuXG5cdHZhciBpc28gPSBuZXcgSXNvdG9wZShnYWxsZXJ5LCB7XG5cdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcblx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRjb2x1bW5XaWR0aDogMTAwLFxuXHRcdFx0Z3V0dGVyOiAwLFxuXHRcdFx0aXNGaXRXaWR0aDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cbn0pKCk7XG5cbi8vIFJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==