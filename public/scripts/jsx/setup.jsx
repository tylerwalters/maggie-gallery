var data = [
	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
];

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<Header />
				<Gallery />
				<Footer />
			</div>
		)
	}
});

React.render(
	<Home />,
	document.getElementById('page')
);