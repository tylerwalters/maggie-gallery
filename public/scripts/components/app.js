/** @jsx React.DOM */

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