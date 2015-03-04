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
		About = require('./components/about'),
		Detail = require('./components/detail'),
		Donate = require('./components/donate'),
		Footer = require('./components/footer'),
		Gallery = require('./components/gallery'),
		Header = require('./components/header'),
		Routes = require('./components/Routes'),
		Index = require('./components/index');


Router.run(routes, Router.HistoryLocation, function (Handler) {
	var data = data;
	React.render(React.createElement(Handler, {data: data}), document.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBkYXRhID0ge1xuXHRwaG90b3M6IFtcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzE3Jyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzE3Jyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG5cdFx0XHRsYXlvdXQ6ICdsYW5kc2NhcGUnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzIwJyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzIwJyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDc0NScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdJTUFHMDc0NScsXG5cdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MTInLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3MTInLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzUxJyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzUxJyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdncmFuZHBhcmVudHMtZGF5Jyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ2dyYW5kcGFyZW50cy1kYXknLFxuXHRcdFx0bGF5b3V0OiAnbGFuZHNjYXBlJ1xuXHRcdH1cblx0XVxufVxuXG52YXIgSXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0JyksXG5cdFx0Um91dGVyIFx0PSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKSxcblx0XHRBYm91dCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hYm91dCcpLFxuXHRcdERldGFpbCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9kZXRhaWwnKSxcblx0XHREb25hdGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZG9uYXRlJyksXG5cdFx0Rm9vdGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2Zvb3RlcicpLFxuXHRcdEdhbGxlcnkgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2FsbGVyeScpLFxuXHRcdEhlYWRlciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9oZWFkZXInKSxcblx0XHRSb3V0ZXMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvUm91dGVzJyksXG5cdFx0SW5kZXggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW5kZXgnKTtcblxuXG5Sb3V0ZXIucnVuKHJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIpIHtcblx0dmFyIGRhdGEgPSBkYXRhO1xuXHRSZWFjdC5yZW5kZXIoPEhhbmRsZXIgZGF0YT17ZGF0YX0gLz4sIGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKSxcblx0XHRcdGlzbztcblxuXHRpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuXHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG5cdFx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdGd1dHRlcjogMFxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KVxufSkoKTsiXSwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9