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
					<li><button ref="shuffle" data-sort="shuffle" onClick={this.props.onClick}>Shuffle</button></li>
					<li><button ref="date" data-sort="date" onClick={this.props.onClick}>Date</button></li>
					<li><button ref="title" data-sort="title" onClick={this.props.onClick}>Title</button></li>
				</ul>
			</div>
		)
	}
});

var Gallery = React.createClass({
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
				<GalleryImage className={preparedData.className} page={preparedData.page} src={preparedData.src} title={image.title}></GalleryImage>
			)
		});

		return (
			<div id="gallery" className="pure-u-1 gallery isotope">
				<GallerySort onClick={sortClick} />
				<div id="gallery__box" class="gallery__box">
					{imageNodes}
				</div>
			</div>
		);
	}
});

module.exports = Gallery;