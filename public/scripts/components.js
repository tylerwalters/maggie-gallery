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
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
					React.createElement(GalleryImage, {src: "../images/IMAG0717.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image gallery__image--grid-set"}), 
					React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image gallery__image--w2"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0720.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0745.desk.jpg", title: "mom-maggie-and-marie", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0712.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0751.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0769.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0770.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0790.desk.jpg", title: "grandparents-day", className: "gallery__image gallery__image--w2"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0771.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
					React.createElement(GalleryImage, {src: "../images/2012-07-31_13-18-45_503.desk.jpg", title: "grandparents-day", className: "gallery__image gallery__image--w2"}), 
					React.createElement(GalleryImage, {src: "../images/IMAG0736.desk.jpg", title: "grandparents-day", className: "gallery__image"}), 
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
		imagesLoaded = require('imagesloaded'),
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

(function () {
	var gallery = document.querySelector('#gallery'),
			iso;

	imagesLoaded(gallery, function () {
		iso = new Isotope(gallery, {
			itemSelector: '.gallery__image',
			masonry: {
				columnWidth: '.gallery__image--grid-set',
				gutter: 0
			}
		});
	})
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qc3giLCJnYWxsZXJ5LmpzeCIsImFib3V0LmpzeCIsImRvbmF0ZS5qc3giLCJkZXRhaWwuanN4IiwiZm9vdGVyLmpzeCIsImFwcC5qc3giLCJyb3V0ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIExvZ28gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nbyBwdXJlLXUtMS00XCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTWFnZ2llIFdhbHRlcnMgTWVkaWEgR2FsbGVyeSBMb2dvXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBOYXZpZ2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdiBwdXJlLXUtMy00XCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L2xpPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2RvbmF0ZVwiPkRvbmF0ZTwvYT48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIHB1cmUtZ1wiPlxuXHRcdFx0XHQ8TG9nbyAvPlxuXHRcdFx0XHQ8TmF2aWdhdGlvbiAvPlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDxpbWcgc3JjPXt0aGlzLnByb3BzLnNyY30gYWx0PXt0aGlzLnByb3BzLnRpdGxlfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcxNy5kZXNrLmpwZ1wiIHRpdGxlPVwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tZ3JpZC1zZXRcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9tb20tbWFnZ2llLWFuZC1tYXJpZS5kZXNrLmpwZ1wiIHRpdGxlPVwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcyMC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NDUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcxMi5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NTEuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzY5LmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc3MC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3OTAuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc3MS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvMjAxMi0wNy0zMV8xMy0xOC00NV81MDMuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDczNi5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvbW9tLW1hZ2dpZS1hbmQtbWFyaWUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLXcyXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3MTcuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcyMC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NDUuZGVzay5qcGdcIiB0aXRsZT1cIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcxMi5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NTEuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzY5LmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc3MC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3OTAuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc3MS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvMjAxMi0wNy0zMV8xMy0xOC00NV81MDMuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDczNi5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8aDE+QWJvdXQgTWFnZ2llPC9oMT5cblx0XHRcdFx0PHA+QWJvdXQgTWFnZ2llLjwvcD5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgRG9uYXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxoMT5Eb25hdGU8L2gxPlxuXHRcdFx0XHQ8cD5BYm91dCBNYWdnaWUuPC9wPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBEZXRhaWxJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWxEZXNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PERldGFpbEltYWdlIHNyYz1cIlwiPjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbj48L0RldGFpbERlc2NyaXB0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZyBpc290b3BlXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInB1cmUtdS0xLTFcIj5UZXN0IHRleHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInBhZ2VcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8Um91dGVyLlJvdXRlSGFuZGxlci8+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIi8vIHZhciBkYXRhID0gW1xuLy8gXHR7ZmlsZW5hbWU6IFwiZ3JhbmRwYXJlbnRzLWRheVwiLCBleHRlbnNpb246IFwianBnXCIsIHR5cGU6IFwicGhvdG9cIiwgdGl0bGU6IFwiZ3JhbmRwYXJlbnRzLWRheVwifSxcbi8vIFx0e2ZpbGVuYW1lOiBcIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIsIGV4dGVuc2lvbjogXCJqcGdcIiwgdHlwZTogXCJwaG90b1wiLCB0aXRsZTogXCJtb20tbWFnZ2llLWFuZC1tYXJpZVwifVxuLy8gXTtcblxudmFyIElzb3RvcGUgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpLFxuXHRcdFJvdXRlciBcdD0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0aW1hZ2VzTG9hZGVkID0gcmVxdWlyZSgnaW1hZ2VzbG9hZGVkJyksXG5cdFx0RGVmYXVsdFJvdXRlID0gUm91dGVyLkRlZmF1bHRSb3V0ZSxcblx0XHRMaW5rID0gUm91dGVyLkxpbmssXG5cdFx0Um91dGUgPSBSb3V0ZXIuUm91dGUsXG5cdFx0Um91dGVIYW5kbGVyID0gUm91dGVyLlJvdXRlSGFuZGxlcixcblx0XHRyb3V0ZXM7XG5cbnJvdXRlcyA9IChcblx0PFJvdXRlIG5hbWU9XCJhcHBcIiBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG5cdFx0PFJvdXRlIG5hbWU9XCJkZXRhaWxcIiBoYW5kbGVyPXtEZXRhaWx9Lz5cblx0XHQ8Um91dGUgbmFtZT1cImFib3V0XCIgaGFuZGxlcj17QWJvdXR9Lz5cblx0XHQ8Um91dGUgbmFtZT1cImRvbmF0ZVwiIGhhbmRsZXI9e0RvbmF0ZX0vPlxuXHRcdDxEZWZhdWx0Um91dGUgaGFuZGxlcj17R2FsbGVyeX0vPlxuXHQ8L1JvdXRlPlxuKVxuXG5Sb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcblx0UmVhY3QucmVuZGVyKDxIYW5kbGVyLz4sIGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKSxcblx0XHRcdGlzbztcblxuXHRpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuXHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG5cdFx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1ncmlkLXNldCcsXG5cdFx0XHRcdGd1dHRlcjogMFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=