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

var GallerySort = React.createClass({displayName: "GallerySort",
	render: function () {
		return (
			React.createElement("div", {className: "gallery__sort"}, 
				React.createElement("ul", null, 
					React.createElement("li", null, React.createElement("button", {ref: "shuffle", "data-sort": "shuffle", onClick: this.props.onClick}, "Shuffle")), 
					React.createElement("li", null, React.createElement("button", {ref: "date", "data-sort": "date", onClick: this.props.onClick}, "Date")), 
					React.createElement("li", null, React.createElement("button", {ref: "title", "data-sort": "title", onClick: this.props.onClick}, "Title"))
				)
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	handleClick: function (sortType) {
		console.log(sortType);
		this.props.sortData(sortType);
	},
	
	componentDidMount: function () {
		var gallery = document.querySelector('#gallery__box'),
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
		var boundClick = this.handleClick.bind(this),
				sortClick,
				imageNodes;

		sortClick = function () {
			console.log(this);
			boundClick(this.dataset.sort);
		}

		imageNodes = this.props.data.map(function (image) {
			var preparedData = {
				className: 'gallery__image gallery__image--' + image.layout,
				page: '/detail/' + image.title,
				src: '../images/' + image.filename + '.desk.' + image.extension
			}
			
			return (
				React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, title: image.title})
			)
		});

		return (
			React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
				React.createElement(GallerySort, {onClick: sortClick}), 
				React.createElement("div", {id: "gallery__box", class: "gallery__box"}, 
					imageNodes
				)
			)
		);
	}
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxudmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMucGFnZX0+PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnlTb3J0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19zb3J0XCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGJ1dHRvbiByZWY9XCJzaHVmZmxlXCIgZGF0YS1zb3J0PVwic2h1ZmZsZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+U2h1ZmZsZTwvYnV0dG9uPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxidXR0b24gcmVmPVwiZGF0ZVwiIGRhdGEtc29ydD1cImRhdGVcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PkRhdGU8L2J1dHRvbj48L2xpPlxuXHRcdFx0XHRcdDxsaT48YnV0dG9uIHJlZj1cInRpdGxlXCIgZGF0YS1zb3J0PVwidGl0bGVcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlRpdGxlPC9idXR0b24+PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRoYW5kbGVDbGljazogZnVuY3Rpb24gKHNvcnRUeXBlKSB7XG5cdFx0Y29uc29sZS5sb2coc29ydFR5cGUpO1xuXHRcdHRoaXMucHJvcHMuc29ydERhdGEoc29ydFR5cGUpO1xuXHR9LFxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5X19ib3gnKSxcblx0XHRcdFx0aXNvO1xuXG5cdFx0aW1hZ2VzTG9hZGVkKGdhbGxlcnksIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcblx0XHRcdFx0bWFzb25yeToge1xuXHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdFx0Z3V0dGVyOiAwXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGJvdW5kQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyksXG5cdFx0XHRcdHNvcnRDbGljayxcblx0XHRcdFx0aW1hZ2VOb2RlcztcblxuXHRcdHNvcnRDbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRcdFx0Ym91bmRDbGljayh0aGlzLmRhdGFzZXQuc29ydCk7XG5cdFx0fVxuXG5cdFx0aW1hZ2VOb2RlcyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG5cdFx0XHR2YXIgcHJlcGFyZWREYXRhID0ge1xuXHRcdFx0XHRjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tJyArIGltYWdlLmxheW91dCxcblx0XHRcdFx0cGFnZTogJy9kZXRhaWwvJyArIGltYWdlLnRpdGxlLFxuXHRcdFx0XHRzcmM6ICcuLi9pbWFnZXMvJyArIGltYWdlLmZpbGVuYW1lICsgJy5kZXNrLicgKyBpbWFnZS5leHRlbnNpb25cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEdhbGxlcnlJbWFnZSBjbGFzc05hbWU9e3ByZXBhcmVkRGF0YS5jbGFzc05hbWV9IHBhZ2U9e3ByZXBhcmVkRGF0YS5wYWdlfSBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9IHRpdGxlPXtpbWFnZS50aXRsZX0+PC9HYWxsZXJ5SW1hZ2U+XG5cdFx0XHQpXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cblx0XHRcdFx0PEdhbGxlcnlTb3J0IG9uQ2xpY2s9e3NvcnRDbGlja30gLz5cblx0XHRcdFx0PGRpdiBpZD1cImdhbGxlcnlfX2JveFwiIGNsYXNzPVwiZ2FsbGVyeV9fYm94XCI+XG5cdFx0XHRcdFx0e2ltYWdlTm9kZXN9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9