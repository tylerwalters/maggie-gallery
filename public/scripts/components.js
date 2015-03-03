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
			columnWidth: 50,
			gutter: 10
		}
	});

})();

// React.render(<App />, document.getElementById('container'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qc3giLCJnYWxsZXJ5LmpzeCIsImFib3V0LmpzeCIsImRvbmF0ZS5qc3giLCJkZXRhaWwuanN4IiwiZm9vdGVyLmpzeCIsImFwcC5qc3giLCJyb3V0ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTG9nbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIE5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2IHB1cmUtdS0zLTRcIj5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvZG9uYXRlXCI+RG9uYXRlPC9hPjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgcHVyZS1nXCI+XG5cdFx0XHRcdDxMb2dvIC8+XG5cdFx0XHRcdDxOYXZpZ2F0aW9uIC8+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgR2FsbGVyeUltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgR2FsbGVyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZyBpc290b3BlXCI+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL21vbS1tYWdnaWUtYW5kLW1hcmllLmRlc2suanBnXCIgdGl0bGU9XCJtb20tbWFnZ2llLWFuZC1tYXJpZVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlIGdhbGxlcnlfX2ltYWdlLS13MlwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcxNy5kZXNrLmpwZ1wiIHRpdGxlPVwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDcyMC5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzQ1LmRlc2suanBnXCIgdGl0bGU9XCJtb20tbWFnZ2llLWFuZC1tYXJpZVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzEyLmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NTEuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDc2OS5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2Ugc3JjPVwiLi4vaW1hZ2VzL0lNQUcwNzcwLmRlc2suanBnXCIgdGl0bGU9XCJncmFuZHBhcmVudHMtZGF5XCIgY2xhc3NOYW1lPVwiZ2FsbGVyeV9faW1hZ2VcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3OTAuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tdzJcIj48L0dhbGxlcnlJbWFnZT5cblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBzcmM9XCIuLi9pbWFnZXMvSU1BRzA3NzEuZGVzay5qcGdcIiB0aXRsZT1cImdyYW5kcGFyZW50cy1kYXlcIiBjbGFzc05hbWU9XCJnYWxsZXJ5X19pbWFnZVwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy8yMDEyLTA3LTMxXzEzLTE4LTQ1XzUwMy5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlIGdhbGxlcnlfX2ltYWdlLS13MlwiPjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0XHQ8R2FsbGVyeUltYWdlIHNyYz1cIi4uL2ltYWdlcy9JTUFHMDczNi5kZXNrLmpwZ1wiIHRpdGxlPVwiZ3JhbmRwYXJlbnRzLWRheVwiIGNsYXNzTmFtZT1cImdhbGxlcnlfX2ltYWdlXCI+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIEFib3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxoMT5BYm91dCBNYWdnaWU8L2gxPlxuXHRcdFx0XHQ8cD5BYm91dCBNYWdnaWUuPC9wPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBEb25hdGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGgxPkRvbmF0ZTwvaDE+XG5cdFx0XHRcdDxwPkFib3V0IE1hZ2dpZS48L3A+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIERldGFpbEltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbERlc2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8RGV0YWlsSW1hZ2Ugc3JjPVwiXCI+PC9EZXRhaWxJbWFnZT5cblx0XHRcdFx0PERldGFpbERlc2NyaXB0aW9uPjwvRGV0YWlsRGVzY3JpcHRpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIEZvb3RlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nIGlzb3RvcGVcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwicHVyZS11LTEtMVwiPlRlc3QgdGV4dDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZVwiPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxSb3V0ZXIuUm91dGVIYW5kbGVyLz5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7IiwiLy8gdmFyIGRhdGEgPSBbXG4vLyBcdHtmaWxlbmFtZTogXCJncmFuZHBhcmVudHMtZGF5XCIsIGV4dGVuc2lvbjogXCJqcGdcIiwgdHlwZTogXCJwaG90b1wiLCB0aXRsZTogXCJncmFuZHBhcmVudHMtZGF5XCJ9LFxuLy8gXHR7ZmlsZW5hbWU6IFwibW9tLW1hZ2dpZS1hbmQtbWFyaWVcIiwgZXh0ZW5zaW9uOiBcImpwZ1wiLCB0eXBlOiBcInBob3RvXCIsIHRpdGxlOiBcIm1vbS1tYWdnaWUtYW5kLW1hcmllXCJ9XG4vLyBdO1xuXG52YXIgSXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0JyksXG5cdFx0Um91dGVyIFx0PSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKSxcblx0XHREZWZhdWx0Um91dGUgPSBSb3V0ZXIuRGVmYXVsdFJvdXRlLFxuXHRcdExpbmsgPSBSb3V0ZXIuTGluayxcblx0XHRSb3V0ZSA9IFJvdXRlci5Sb3V0ZSxcblx0XHRSb3V0ZUhhbmRsZXIgPSBSb3V0ZXIuUm91dGVIYW5kbGVyLFxuXHRcdHJvdXRlcztcblxucm91dGVzID0gKFxuXHQ8Um91dGUgbmFtZT1cImFwcFwiIHBhdGg9XCIvXCIgaGFuZGxlcj17QXBwfT5cblx0XHQ8Um91dGUgbmFtZT1cImRldGFpbFwiIGhhbmRsZXI9e0RldGFpbH0vPlxuXHRcdDxSb3V0ZSBuYW1lPVwiYWJvdXRcIiBoYW5kbGVyPXtBYm91dH0vPlxuXHRcdDxSb3V0ZSBuYW1lPVwiZG9uYXRlXCIgaGFuZGxlcj17RG9uYXRlfS8+XG5cdFx0PERlZmF1bHRSb3V0ZSBoYW5kbGVyPXtHYWxsZXJ5fS8+XG5cdDwvUm91dGU+XG4pXG5cblJvdXRlci5ydW4ocm91dGVzLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuXHRSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG59KTtcblxuKGZ1bmN0aW9uKCkge1xuXG5cdHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKTtcblxuXHR2YXIgaXNvID0gbmV3IElzb3RvcGUoZ2FsbGVyeSwge1xuXHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG5cdFx0bWFzb25yeToge1xuXHRcdFx0Y29sdW1uV2lkdGg6IDUwLFxuXHRcdFx0Z3V0dGVyOiAxMFxuXHRcdH1cblx0fSk7XG5cbn0pKCk7XG5cbi8vIFJlYWN0LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==