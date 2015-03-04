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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2FwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3M9XCJwYWdlXCI+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PFJvdXRlSGFuZGxlciB7Li4udGhpcy5wcm9wc30vPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=