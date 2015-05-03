var Router = require('react-router'),
		Header = require('./header'),
		Footer = require('./footer'),
		TransitionGroup = React.addons.CSSTransitionGroup;

var Index = React.createClass({displayName: "Index",
	render: function () {
		return (
			React.createElement("div", {className: "page", ref: "page"}, 
				React.createElement(Header, null), 
				React.createElement(TransitionGroup, {component: "main", transitionName: "example"}, 
					React.createElement(Router.RouteHandler, React.__spread({},  this.props))
				), 
				React.createElement(Footer, null)
			)
		);
	}
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0SGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXInKSxcblx0XHRGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuXHRcdFRyYW5zaXRpb25Hcm91cCA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXA7XG5cbnZhciBJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiIHJlZj1cInBhZ2VcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD1cIm1haW5cIiB0cmFuc2l0aW9uTmFtZT1cImV4YW1wbGVcIj5cblx0XHRcdFx0XHQ8Um91dGVyLlJvdXRlSGFuZGxlciB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8L1RyYW5zaXRpb25Hcm91cD5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7Il0sImZpbGUiOiJjb21wb25lbnRzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=