var Router = require('react-router'),
		Header = require('./header'),
		Footer = require('./footer');

var Index = React.createClass({
	render: function () {
		return (
			<div className="page" ref="page">
				<Header />
				<Router.RouteHandler {...this.props}/>
				<Footer />
			</div>
		);
	}
});

module.exports = Index;