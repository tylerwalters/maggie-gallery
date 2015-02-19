var GalleryImage = React.createClass({
	render: function () {
		return (
			<div className="header__logo pure-u-1-4">
				<img src="../images/logo.png" alt="Maggie Walters Media Gallery Logo" className="header__logo" />
			</div>
		)
	}
})

var Detail = React.createClass({
	render: function (data) {
		return (
			<main className="content pure-g">
				<DetailImage src=""></DetailImage>
				<DetailDescription title={} ></DetailDescription>
			</main>
		);
	}
});

React.render(
	<Detail />,
	document.getElementById('content')
)