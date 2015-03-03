var App = React.createClass({
	render: function () {
		return (
			<div class="page">
				<Header />
				<Router.RouteHandler/>
				<Footer />
			</div>
		);
	}
});