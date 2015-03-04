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

module.exports = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2hlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIExvZ28gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nbyBwdXJlLXUtMS00XCI+XG5cdFx0XHRcdDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTWFnZ2llIFdhbHRlcnMgTWVkaWEgR2FsbGVyeSBMb2dvXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBOYXZpZ2F0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJoZWFkZXJfX25hdiBwdXJlLXUtMy00XCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIi9cIj5Ib21lPC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT48L2xpPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiL2RvbmF0ZVwiPkRvbmF0ZTwvYT48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9uYXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIHB1cmUtZ1wiPlxuXHRcdFx0XHQ8TG9nbyAvPlxuXHRcdFx0XHQ8TmF2aWdhdGlvbiAvPlxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyOyJdLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==