var Isotope = require('isotope-layout'),
		imagesLoaded = require('imagesloaded');

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
	componentDidMount: function () {
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
	},
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxudmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMucGFnZX0+PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpLFxuXHRcdFx0XHRpc287XG5cblx0XHRpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0aXNvID0gbmV3IElzb3RvcGUoZ2FsbGVyeSwge1xuXHRcdFx0XHRpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeV9faW1hZ2UnLFxuXHRcdFx0XHRtYXNvbnJ5OiB7XG5cdFx0XHRcdFx0Y29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9faW1hZ2UtLXBvcnRyYWl0Jyxcblx0XHRcdFx0XHRndXR0ZXI6IDBcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGltYWdlTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIHByZXBhcmVkRGF0YSA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG5cdFx0XHRcdHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcblx0XHRcdFx0c3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfSB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG5cdFx0XHRcdFx0e2ltYWdlTm9kZXN9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxlcnk7Il0sImZpbGUiOiJjb21wb25lbnRzL2dhbGxlcnkuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==