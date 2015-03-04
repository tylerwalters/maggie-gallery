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
				React.createElement("a", {href: this.props.page}, React.createElement("img", {src: this.props.src, alt: this.props.title}))
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function () {
		var imageNodes = this.props.data.photos.map(function (image) {
			var preparedData = {
				className: 'gallery__image gallery__image--' + image.layout,
				page: '/detail/' + image.title,
				src: '../images/' + image.filename + '.desk.' + image.extension
			}
			
			return (
				React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, title: image.title})
			)
		})
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
					imageNodes
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
				React.createElement(RouteHandler, React.__spread({},  this.props)), 
				React.createElement(Footer, null)
			)
		);
	}
});
// var data = [
// 	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
// 	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
// ];

var data = {
	photos: [
		{
			filename: 'IMAG0717',
			extension: 'jpg',
			title: 'IMAG0717',
			layout: 'portrait'
		},
		{
			filename: 'mom-maggie-and-marie',
			extension: 'jpg',
			title: 'mom-maggie-and-marie',
			layout: 'landscape'
		},
		{
			filename: 'IMAG0720',
			extension: 'jpg',
			title: 'IMAG0720',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0745',
			extension: 'jpg',
			title: 'IMAG0745',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0712',
			extension: 'jpg',
			title: 'IMAG0712',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0751',
			extension: 'jpg',
			title: 'IMAG0751',
			layout: 'portrait'
		},
		{
			filename: 'grandparents-day',
			extension: 'jpg',
			title: 'grandparents-day',
			layout: 'landscape'
		}
	]
}

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
	React.render(React.createElement(Handler, {params: params, data: data}), document.body);
});

(function () {
	var gallery = document.querySelector('#gallery'),
			iso;

	imagesLoaded(gallery, function () {
		iso = new Isotope(gallery, {
			itemSelector: '.gallery__image',
			masonry: {
				columnWidth: '.gallery__image--portrait',
				gutter: 0
			}
		});
	})
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qc3giLCJnYWxsZXJ5LmpzeCIsImFib3V0LmpzeCIsImRvbmF0ZS5qc3giLCJkZXRhaWwuanN4IiwiZm9vdGVyLmpzeCIsImFwcC5qc3giLCJyb3V0ZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMb2dvID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgTmF2aWdhdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyX19uYXYgcHVyZS11LTMtNFwiPlxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9kb25hdGVcIj5Eb25hdGU8L2E+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvbmF2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBIZWFkZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlciBwdXJlLWdcIj5cblx0XHRcdFx0PExvZ28gLz5cblx0XHRcdFx0PE5hdmlnYXRpb24gLz5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBHYWxsZXJ5SW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8YSBocmVmPXt0aGlzLnByb3BzLnBhZ2V9PjxpbWcgc3JjPXt0aGlzLnByb3BzLnNyY30gYWx0PXt0aGlzLnByb3BzLnRpdGxlfSAvPjwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW1hZ2VOb2RlcyA9IHRoaXMucHJvcHMuZGF0YS5waG90b3MubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIHByZXBhcmVkRGF0YSA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG5cdFx0XHRcdHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcblx0XHRcdFx0c3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfSB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG5cdFx0XHRcdFx0e2ltYWdlTm9kZXN9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBBYm91dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8aDE+QWJvdXQgTWFnZ2llPC9oMT5cblx0XHRcdFx0PHA+QWJvdXQgTWFnZ2llLjwvcD5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgRG9uYXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxoMT5Eb25hdGU8L2gxPlxuXHRcdFx0XHQ8cD5BYm91dCBNYWdnaWUuPC9wPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBEZXRhaWxJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWxEZXNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PERldGFpbEltYWdlIHNyYz1cIlwiPjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbj48L0RldGFpbERlc2NyaXB0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvb3RlciBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZyBpc290b3BlXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInB1cmUtdS0xLTFcIj5UZXN0IHRleHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzcz1cInBhZ2VcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8Um91dGVIYW5kbGVyIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsIi8vIHZhciBkYXRhID0gW1xuLy8gXHR7ZmlsZW5hbWU6IFwiZ3JhbmRwYXJlbnRzLWRheVwiLCBleHRlbnNpb246IFwianBnXCIsIHR5cGU6IFwicGhvdG9cIiwgdGl0bGU6IFwiZ3JhbmRwYXJlbnRzLWRheVwifSxcbi8vIFx0e2ZpbGVuYW1lOiBcIm1vbS1tYWdnaWUtYW5kLW1hcmllXCIsIGV4dGVuc2lvbjogXCJqcGdcIiwgdHlwZTogXCJwaG90b1wiLCB0aXRsZTogXCJtb20tbWFnZ2llLWFuZC1tYXJpZVwifVxuLy8gXTtcblxudmFyIGRhdGEgPSB7XG5cdHBob3RvczogW1xuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MTcnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3MTcnLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ21vbS1tYWdnaWUtYW5kLW1hcmllJyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ21vbS1tYWdnaWUtYW5kLW1hcmllJyxcblx0XHRcdGxheW91dDogJ2xhbmRzY2FwZSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MjAnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3MjAnLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzQ1Jyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzQ1Jyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDcxMicsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdJTUFHMDcxMicsXG5cdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3NTEnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3NTEnLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ2dyYW5kcGFyZW50cy1kYXknLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnZ3JhbmRwYXJlbnRzLWRheScsXG5cdFx0XHRsYXlvdXQ6ICdsYW5kc2NhcGUnXG5cdFx0fVxuXHRdXG59XG5cbnZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpLFxuXHRcdERlZmF1bHRSb3V0ZSA9IFJvdXRlci5EZWZhdWx0Um91dGUsXG5cdFx0TGluayA9IFJvdXRlci5MaW5rLFxuXHRcdFJvdXRlID0gUm91dGVyLlJvdXRlLFxuXHRcdFJvdXRlSGFuZGxlciA9IFJvdXRlci5Sb3V0ZUhhbmRsZXIsXG5cdFx0cm91dGVzO1xuXG5yb3V0ZXMgPSAoXG5cdDxSb3V0ZSBuYW1lPVwiYXBwXCIgcGF0aD1cIi9cIiBoYW5kbGVyPXtBcHB9PlxuXHRcdDxSb3V0ZSBuYW1lPVwiZGV0YWlsXCIgaGFuZGxlcj17RGV0YWlsfS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG5cdFx0PFJvdXRlIG5hbWU9XCJkb25hdGVcIiBoYW5kbGVyPXtEb25hdGV9Lz5cblx0XHQ8RGVmYXVsdFJvdXRlIGhhbmRsZXI9e0dhbGxlcnl9Lz5cblx0PC9Sb3V0ZT5cbilcblxuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyKSB7XG5cdFJlYWN0LnJlbmRlcig8SGFuZGxlciBwYXJhbXM9e3BhcmFtc30gZGF0YT17ZGF0YX0gLz4sIGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKSxcblx0XHRcdGlzbztcblxuXHRpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuXHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG5cdFx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdGd1dHRlcjogMFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=