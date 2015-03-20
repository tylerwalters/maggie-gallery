var Isotope = require('isotope-layout'),
		imagesLoaded = require('imagesloaded');

var GalleryImage = React.createClass({
	render: function () {
		return (
			<div className={this.props.className}>
				<a href={this.props.page}><img src={this.props.src} alt={this.props.title} /></a>
			</div>
		)
	}
});

var GallerySort = React.createClass({
	render: function () {
		return (
			<div className="gallery__sort">
				<ul>
					<li><button onClick={this.props.onClick}>Shuffle</button></li>
				</ul>
			</div>
		)
	}
});

var Gallery = React.createClass({
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
				<GalleryImage className={preparedData.className} page={preparedData.page} src={preparedData.src} title={image.title}></GalleryImage>
			)
		})
		return (
			<div id="gallery" className="pure-u-1 gallery isotope">
				<GallerySort onClick={boundClick} />
				<div id="gallery__box" class="gallery__box">
					{imageNodes}
				</div>
			</div>
		);
	}
});

module.exports = Gallery;