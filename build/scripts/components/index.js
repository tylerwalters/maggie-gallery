var Router = require('react-router'),
		Header = require('./header'),
		Footer = require('./footer');

var Index = React.createClass({displayName: "Index",
	render: function () {
		return (
			React.createElement("div", {className: "page", ref: "page"}, 
				React.createElement(Header, null), 
				React.createElement(Router.RouteHandler, React.__spread({},  this.props)), 
				React.createElement(Footer, null)
			)
		);
	}
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0SGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXInKSxcblx0XHRGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiByZWY9XCJwYWdlXCI+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PFJvdXRlci5Sb3V0ZUhhbmRsZXIgey4uLnRoaXMucHJvcHN9Lz5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7Il0sImZpbGUiOiJjb21wb25lbnRzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=