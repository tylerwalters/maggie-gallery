/** @jsx React.DOM */

var GalleryImage = React.createClass({displayName: "GalleryImage",
	render: function () {
		return (
			React.createElement("div", {className: "gallery__image"}, 
				React.createElement("img", {src: this.props.src, alt: this.props.title})
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function (data) {
		return (
			React.createElement("main", {id: "gallery", className: "content pure-g isotope"}, 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/mom-maggie-and-marie.desk.jpg", title: "mom-maggie-and-marie"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"}), 
				React.createElement(GalleryImage, {src: "../images/grandparents-day.desk.jpg", title: "grandparents-day"})
			)
		);
	}
});