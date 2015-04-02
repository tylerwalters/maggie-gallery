var Router = require('react-router'),
		Header = require('./header'),
		Footer = require('./footer');

var Index = React.createClass({displayName: "Index",
	render: function () {
		return (
			React.createElement("div", {className: "page"}, 
				React.createElement(Header, null), 
				React.createElement(Router.RouteHandler, React.__spread({},  this.props)), 
				React.createElement(Footer, null)
			)
		);
	}
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0SGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXInKSxcblx0XHRGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8Um91dGVyLlJvdXRlSGFuZGxlciB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiXSwiZmlsZSI6ImNvbXBvbmVudHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==