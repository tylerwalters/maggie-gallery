var Index = React.createClass({
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

module.exports = Index;