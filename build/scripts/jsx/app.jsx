var Router 	= require('react-router'),
		Routes = require('./components/routes'),
		Isotope = require('isotope-layout'),
		imagesLoaded = require('imagesloaded');


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