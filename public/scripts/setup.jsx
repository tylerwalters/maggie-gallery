var data = [
	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
];

var Header = React.createClass({
	render: function () {
		return (
			<header className="header pure-g">
				<Logo />
				<Navigation />
			</header>
		);
	}
});

var Home = React.createClass({
	render: function () {
		return (
			<div id="page">
				<Header />
				<Gallery />
				<Footer />
			</div>
		)
	}
});

React.render(
	<Home />,
	document.body
);

// (function () {
// 	var gallery = document.querySelector('#gallery');

// 	var iso = new Isotope(gallery, {
// 		itemSelector: '.gallery__image',
// 		masonry: {
// 			columnWidth: 200
// 		}
// 	})
// })();