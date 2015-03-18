var Router 	= require('react-router'),
		Routes = require('./components/routes'),
		Isotope = require('isotope-layout'),
		imagesLoaded = require('imagesloaded');


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdFJvdXRlcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXMnKSxcblx0XHRJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxuXG5Sb3V0ZXIucnVuKFJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcblx0dmFyIGRhdGEgPSBkYXRhO1xuXHRSZWFjdC5yZW5kZXIoPEhhbmRsZXIgLz4sIGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKSxcblx0XHRcdGlzbztcblxuXHRpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuXHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG5cdFx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdGd1dHRlcjogMFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufSkoKTsiXSwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9