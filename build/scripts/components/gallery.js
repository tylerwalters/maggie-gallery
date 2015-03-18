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
		var imageNodes = this.props.data.map(function (image) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBHYWxsZXJ5SW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8YSBocmVmPXt0aGlzLnByb3BzLnBhZ2V9PjxpbWcgc3JjPXt0aGlzLnByb3BzLnNyY30gYWx0PXt0aGlzLnByb3BzLnRpdGxlfSAvPjwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW1hZ2VOb2RlcyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHR2YXIgcHJlcGFyZWREYXRhID0ge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tJyArIGltYWdlLmxheW91dCxcblx0XHRcdFx0cGFnZTogJy9kZXRhaWwvJyArIGltYWdlLnRpdGxlLFxuXHRcdFx0XHRzcmM6ICcuLi9pbWFnZXMvJyArIGltYWdlLmZpbGVuYW1lICsgJy5kZXNrLicgKyBpbWFnZS5leHRlbnNpb25cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBjbGFzc05hbWU9e3ByZXBhcmVkRGF0YS5jbGFzc05hbWV9IHBhZ2U9e3ByZXBhcmVkRGF0YS5wYWdlfSBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9IHRpdGxlPXtpbWFnZS50aXRsZX0+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHQpXG5cdFx0fSlcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cblx0XHRcdFx0XHR7aW1hZ2VOb2Rlc31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9