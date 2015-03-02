var GalleryImage = React.createClass({
	render: function () {
		return (
			<div className="gallery__image">
				<img src={this.props.src} alt={this.props.title} />
			</div>
		)
	}
});

var Gallery = React.createClass({
	render: function (data) {
		return (
			<main id="gallery" className="content pure-g isotope">
				<GalleryImage src="../images/mom-maggie-and-marie.desk.jpg" title="mom-maggie-and-marie"></GalleryImage>
				<GalleryImage src="../images/grandparents-day.desk.jpg" title="grandparents-day"></GalleryImage>
				<GalleryImage src="../images/mom-maggie-and-marie.desk.jpg" title="mom-maggie-and-marie"></GalleryImage>
				<GalleryImage src="../images/grandparents-day.desk.jpg" title="grandparents-day"></GalleryImage>
				<GalleryImage src="../images/mom-maggie-and-marie.desk.jpg" title="mom-maggie-and-marie"></GalleryImage>
				<GalleryImage src="../images/grandparents-day.desk.jpg" title="grandparents-day"></GalleryImage>
				<GalleryImage src="../images/grandparents-day.desk.jpg" title="grandparents-day"></GalleryImage>
			</main>
		);
	}
});