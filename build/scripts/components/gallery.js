var data = {
	photos: [
		{
			filename: '2012-07-31_13-18-45_503',
			extension: 'jpg',
			title: '2012-07-31_13-18-45_503',
			layout: 'landscape'
		},
		{
			filename: 'grandparents-day',
			extension: 'jpg',
			title: 'grandparents-day',
			layout: 'landscape'
		},
		{
			filename: 'IMAG0712',
			extension: 'jpg',
			title: 'IMAG0712',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0717',
			extension: 'jpg',
			title: 'IMAG0717',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0720',
			extension: 'jpg',
			title: 'IMAG0720',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0736',
			extension: 'jpg',
			title: 'IMAG0736',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0745',
			extension: 'jpg',
			title: 'IMAG0745',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0751',
			extension: 'jpg',
			title: 'IMAG0751',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0769',
			extension: 'jpg',
			title: 'IMAG0769',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0770',
			extension: 'jpg',
			title: 'IMAG0770',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0771',
			extension: 'jpg',
			title: 'IMAG0771',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0790',
			extension: 'jpg',
			title: 'IMAG0790',
			layout: 'landscape'
		},
		{
			filename: 'mom-maggie-and-marie',
			extension: 'jpg',
			title: 'mom-maggie-and-marie',
			layout: 'landscape'
		},
	]
}

var GalleryImage = React.createClass({displayName: "GalleryImage",
	render: function () {
		return (
			React.createElement("div", {className: this.props.className}, 
				React.createElement("a", {href: this.props.page}, React.createElement("img", {src: this.props.src, alt: this.props.title}))
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function () {
		var imageNodes = data.photos.map(function (image) {
			var preparedData = {
				className: 'gallery__image gallery__image--' + image.layout,
				page: '/detail/' + image.title,
				src: '../images/' + image.filename + '.desk.' + image.extension
			}
			
			return (
				React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, title: image.title})
			)
		})
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
					imageNodes
				)
			)
		);
	}
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBkYXRhID0ge1xuXHRwaG90b3M6IFtcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJzIwMTItMDctMzFfMTMtMTgtNDVfNTAzJyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJzIwMTItMDctMzFfMTMtMTgtNDVfNTAzJyxcblx0XHRcdGxheW91dDogJ2xhbmRzY2FwZSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnZ3JhbmRwYXJlbnRzLWRheScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdncmFuZHBhcmVudHMtZGF5Jyxcblx0XHRcdGxheW91dDogJ2xhbmRzY2FwZSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MTInLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3MTInLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzE3Jyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzE3Jyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDcyMCcsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdJTUFHMDcyMCcsXG5cdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MzYnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3MzYnLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzQ1Jyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzQ1Jyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDc1MScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdJTUFHMDc1MScsXG5cdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3NjknLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3NjknLFxuXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzcwJyxcblx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG5cdFx0XHR0aXRsZTogJ0lNQUcwNzcwJyxcblx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDc3MScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdJTUFHMDc3MScsXG5cdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3OTAnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcblx0XHRcdHRpdGxlOiAnSU1BRzA3OTAnLFxuXHRcdFx0bGF5b3V0OiAnbGFuZHNjYXBlJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0ZmlsZW5hbWU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG5cdFx0XHRleHRlbnNpb246ICdqcGcnLFxuXHRcdFx0dGl0bGU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG5cdFx0XHRsYXlvdXQ6ICdsYW5kc2NhcGUnXG5cdFx0fSxcblx0XVxufVxuXG52YXIgR2FsbGVyeUltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PGEgaHJlZj17dGhpcy5wcm9wcy5wYWdlfT48aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0gLz48L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgR2FsbGVyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGltYWdlTm9kZXMgPSBkYXRhLnBob3Rvcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHR2YXIgcHJlcGFyZWREYXRhID0ge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tJyArIGltYWdlLmxheW91dCxcblx0XHRcdFx0cGFnZTogJy9kZXRhaWwvJyArIGltYWdlLnRpdGxlLFxuXHRcdFx0XHRzcmM6ICcuLi9pbWFnZXMvJyArIGltYWdlLmZpbGVuYW1lICsgJy5kZXNrLicgKyBpbWFnZS5leHRlbnNpb25cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBjbGFzc05hbWU9e3ByZXBhcmVkRGF0YS5jbGFzc05hbWV9IHBhZ2U9e3ByZXBhcmVkRGF0YS5wYWdlfSBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9IHRpdGxlPXtpbWFnZS50aXRsZX0+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cblx0XHRcdFx0XHR7aW1hZ2VOb2Rlc31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9