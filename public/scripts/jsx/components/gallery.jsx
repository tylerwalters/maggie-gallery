var GalleryImage = React.createClass({
	render: function () {
		return (
			<div className={this.props.className}>
				<img src={this.props.src} alt={this.props.title} />
			</div>
		)
	}
});

var Gallery = React.createClass({
	render: function (data) {
		return (
			<main className="content pure-g">
				<div id="gallery" className="pure-u-1 gallery isotope">
					<GalleryImage src="../images/IMAG0717.desk.jpg" title="mom-maggie-and-marie" className="gallery__image gallery__image--grid-set"></GalleryImage>
					<GalleryImage src="../images/mom-maggie-and-marie.desk.jpg" title="mom-maggie-and-marie" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0720.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0745.desk.jpg" title="mom-maggie-and-marie" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0712.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0751.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0769.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0770.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0790.desk.jpg" title="grandparents-day" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0771.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/2012-07-31_13-18-45_503.desk.jpg" title="grandparents-day" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0736.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/mom-maggie-and-marie.desk.jpg" title="mom-maggie-and-marie" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0717.desk.jpg" title="mom-maggie-and-marie" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0720.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0745.desk.jpg" title="mom-maggie-and-marie" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0712.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0751.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0769.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0770.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/IMAG0790.desk.jpg" title="grandparents-day" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0771.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
					<GalleryImage src="../images/2012-07-31_13-18-45_503.desk.jpg" title="grandparents-day" className="gallery__image gallery__image--w2"></GalleryImage>
					<GalleryImage src="../images/IMAG0736.desk.jpg" title="grandparents-day" className="gallery__image"></GalleryImage>
				</div>
			</main>
		);
	}
});