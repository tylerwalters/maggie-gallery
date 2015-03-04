// var data = [
// 	{filename: "grandparents-day", extension: "jpg", type: "photo", title: "grandparents-day"},
// 	{filename: "mom-maggie-and-marie", extension: "jpg", type: "photo", title: "mom-maggie-and-marie"}
// ];

var data = {
	photos: [
		{
			filename: 'IMAG0717',
			extension: 'jpg',
			title: 'IMAG0717',
			layout: 'portrait'
		},
		{
			filename: 'mom-maggie-and-marie',
			extension: 'jpg',
			title: 'mom-maggie-and-marie',
			layout: 'landscape'
		},
		{
			filename: 'IMAG0720',
			extension: 'jpg',
			title: 'IMAG0720',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0745',
			extension: 'jpg',
			title: 'IMAG0745',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0712',
			extension: 'jpg',
			title: 'IMAG0712',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0751',
			extension: 'jpg',
			title: 'IMAG0751',
			layout: 'portrait'
		},
		{
			filename: 'grandparents-day',
			extension: 'jpg',
			title: 'grandparents-day',
			layout: 'landscape'
		}
	]
}

var Isotope = require('isotope-layout'),
		Router 	= require('react-router'),
		imagesLoaded = require('imagesloaded'),
		DefaultRoute = Router.DefaultRoute,
		Link = Router.Link,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		routes;

routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="detail" handler={Detail}/>
		<Route name="about" handler={About}/>
		<Route name="donate" handler={Donate}/>
		<DefaultRoute handler={Gallery}/>
	</Route>
)

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler params={params} data={data} />, document.body);
});

(function () {
	var gallery = document.querySelector('#gallery'),
			iso;

	imagesLoaded(gallery, function () {
		iso = new Isotope(gallery, {
			itemSelector: '.gallery__image',
			masonry: {
				columnWidth: '.gallery__image--portrait',
				gutter: 0
			}
		});
	})
})();