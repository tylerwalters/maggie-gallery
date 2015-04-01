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

var GallerySortItem = React.createClass({displayName: "GallerySortItem",
	render: function () {
		return (
			React.createElement("li", null, React.createElement("button", {"data-sort": this.props.name, onClick: this.props.onClick}, this.props.display))
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	handleSort: function (sortType) {
		this.props.sortData(sortType);
		this.componentDidMount();
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
		var sortClick,
				imageNodes;

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
				React.createElement("div", {className: "gallery__sort"}, 
					React.createElement("ul", null, 
						React.createElement(GallerySortItem, {name: "shuffle", display: "Shuffle", onClick: this.handleSort.bind(this, 'shuffle')}), 
						React.createElement(GallerySortItem, {name: "date", display: "Date", onClick: this.handleSort.bind(this, 'date')}), 
						React.createElement(GallerySortItem, {name: "title", display: "Title", onClick: this.handleSort.bind(this, 'title')})
					)
				), 
				React.createElement("div", {id: "gallery__box", class: "gallery__box"}, 
					imageNodes
				)
			)
		);
	}
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlID0gcmVxdWlyZSgnaXNvdG9wZS1sYXlvdXQnKSxcblx0XHRpbWFnZXNMb2FkZWQgPSByZXF1aXJlKCdpbWFnZXNsb2FkZWQnKTtcblxudmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdDxhIGhyZWY9e3RoaXMucHJvcHMucGFnZX0+PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9IC8+PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEdhbGxlcnlTb3J0SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaT48YnV0dG9uIGRhdGEtc29ydD17dGhpcy5wcm9wcy5uYW1lfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9Pnt0aGlzLnByb3BzLmRpc3BsYXl9PC9idXR0b24+PC9saT5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgR2FsbGVyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0aGFuZGxlU29ydDogZnVuY3Rpb24gKHNvcnRUeXBlKSB7XG5cdFx0dGhpcy5wcm9wcy5zb3J0RGF0YShzb3J0VHlwZSk7XG5cdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHR9LFxuXHRcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5X19ib3gnKSxcblx0XHRcdFx0aXNvO1xuXG5cdFx0aW1hZ2VzTG9hZGVkKGdhbGxlcnksIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcblx0XHRcdFx0bWFzb25yeToge1xuXHRcdFx0XHRcdGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG5cdFx0XHRcdFx0Z3V0dGVyOiAwXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHNvcnRDbGljayxcblx0XHRcdFx0aW1hZ2VOb2RlcztcblxuXHRcdGltYWdlTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIHByZXBhcmVkRGF0YSA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG5cdFx0XHRcdHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcblx0XHRcdFx0c3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfSB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0KVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fc29ydFwiPlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxHYWxsZXJ5U29ydEl0ZW0gbmFtZT1cInNodWZmbGVcIiBkaXNwbGF5PVwiU2h1ZmZsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU29ydC5iaW5kKHRoaXMsICdzaHVmZmxlJyl9IC8+XG5cdFx0XHRcdFx0XHQ8R2FsbGVyeVNvcnRJdGVtIG5hbWU9XCJkYXRlXCIgZGlzcGxheT1cIkRhdGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzLCAnZGF0ZScpfSAvPlxuXHRcdFx0XHRcdFx0PEdhbGxlcnlTb3J0SXRlbSBuYW1lPVwidGl0bGVcIiBkaXNwbGF5PVwiVGl0bGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzLCAndGl0bGUnKX0gLz5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cImdhbGxlcnlfX2JveFwiIGNsYXNzPVwiZ2FsbGVyeV9fYm94XCI+XG5cdFx0XHRcdFx0e2ltYWdlTm9kZXN9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9