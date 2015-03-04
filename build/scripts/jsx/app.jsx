var Isotope = require('isotope-layout'),
		Router 	= require('react-router'),
		imagesLoaded = require('imagesloaded'),
		About = require('./components/about'),
		Detail = require('./components/detail'),
		Donate = require('./components/donate'),
		Footer = require('./components/footer'),
		Gallery = require('./components/gallery'),
		Header = require('./components/header'),
		Routes = require('./components/routes'),
		Index = require('./components/index');


Router.run(Routes, Router.HistoryLocation, function (Handler) {
	var data = data;
	React.render(<Handler />, document.body);
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