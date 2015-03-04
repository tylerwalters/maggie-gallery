var App = React.createClass({
	render: function () {
		return (
			<div class="page">
				<Header />
				<RouteHandler {...this.props}/>
				<Footer />
			</div>
		);
	}
});