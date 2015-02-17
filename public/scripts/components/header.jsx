var Header = React.createClass({
	render: function () {
		return (
			<div className="logo">
				<h1>Hello, World!</h1>
				<p>This is the header.</p>
			</div>
		);
	}
});

React.render(
	<Header />,
	document.getElementById('header')
)