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
					React.createElement("li", null, React.createElement("div", {onClick: this.props.onClick}, "Shuffle"))
				)
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	handleClick: function () {
		// console.log(this.props);
		this.props.sortData();
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
		var boundClick = this.handleClick.bind(this);
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
			React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
				React.createElement(GallerySort, {onClick: boundClick}), 
				React.createElement("div", {id: "gallery__box", class: "gallery__box"}, 
					imageNodes
				)
			)
		);
	}
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxudmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMucGFnZX0+PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnlTb3J0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19zb3J0XCI+XG5cdFx0XHRcdDx1bD5cblx0XHRcdFx0XHQ8bGk+PGRpdiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlNodWZmbGU8L2Rpdj48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGhhbmRsZUNsaWNrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG5cdFx0dGhpcy5wcm9wcy5zb3J0RGF0YSgpO1xuXHR9LFxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5X19ib3gnKSxcblx0XHRcdFx0aXNvO1xuXG5cdFx0aW1hZ2VzTG9hZGVkKGdhbGxlcnksIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcblx0XHRcdFx0bWFzb25yeToge1xuXHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdFx0Z3V0dGVyOiAwXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGJvdW5kQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dmFyIGltYWdlTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIHByZXBhcmVkRGF0YSA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG5cdFx0XHRcdHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcblx0XHRcdFx0c3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfSB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG5cdFx0XHRcdDxHYWxsZXJ5U29ydCBvbkNsaWNrPXtib3VuZENsaWNrfSAvPlxuXHRcdFx0XHQ8ZGl2IGlkPVwiZ2FsbGVyeV9fYm94XCIgY2xhc3M9XCJnYWxsZXJ5X19ib3hcIj5cblx0XHRcdFx0XHR7aW1hZ2VOb2Rlc31cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsZXJ5OyJdLCJmaWxlIjoiY29tcG9uZW50cy9nYWxsZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=