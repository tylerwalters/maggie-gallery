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
	React.render(React.createElement(Handler, null), document.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpLFxuXHRcdEFib3V0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Fib3V0JyksXG5cdFx0RGV0YWlsID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2RldGFpbCcpLFxuXHRcdERvbmF0ZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kb25hdGUnKSxcblx0XHRGb290ZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZm9vdGVyJyksXG5cdFx0R2FsbGVyeSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9nYWxsZXJ5JyksXG5cdFx0SGVhZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2hlYWRlcicpLFxuXHRcdFJvdXRlcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXMnKSxcblx0XHRJbmRleCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbmRleCcpO1xuXG5cblJvdXRlci5ydW4oUm91dGVzLCBSb3V0ZXIuSGlzdG9yeUxvY2F0aW9uLCBmdW5jdGlvbiAoSGFuZGxlcikge1xuXHR2YXIgZGF0YSA9IGRhdGE7XG5cdFJlYWN0LnJlbmRlcig8SGFuZGxlciAvPiwgZG9jdW1lbnQuYm9keSk7XG59KTtcblxuKGZ1bmN0aW9uICgpIHtcblx0dmFyIGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpLFxuXHRcdFx0aXNvO1xuXG5cdGltYWdlc0xvYWRlZChnYWxsZXJ5LCBmdW5jdGlvbiAoKSB7XG5cdFx0aXNvID0gbmV3IElzb3RvcGUoZ2FsbGVyeSwge1xuXHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcblx0XHRcdG1hc29ucnk6IHtcblx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9faW1hZ2UtLXBvcnRyYWl0Jyxcblx0XHRcdFx0Z3V0dGVyOiAwXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pXG59KSgpOyJdLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=