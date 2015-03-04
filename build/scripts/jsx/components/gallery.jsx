var data = {
	photos: [
		{
			filename: '2012-07-31_13-18-45_503',
			extension: 'jpg',
			title: '2012-07-31_13-18-45_503',
			layout: 'landscape'
		},
		{
			filename: 'grandparents-day',
			extension: 'jpg',
			title: 'grandparents-day',
			layout: 'landscape'
		},
		{
			filename: 'IMAG0712',
			extension: 'jpg',
			title: 'IMAG0712',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0717',
			extension: 'jpg',
			title: 'IMAG0717',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0720',
			extension: 'jpg',
			title: 'IMAG0720',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0736',
			extension: 'jpg',
			title: 'IMAG0736',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0745',
			extension: 'jpg',
			title: 'IMAG0745',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0751',
			extension: 'jpg',
			title: 'IMAG0751',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0769',
			extension: 'jpg',
			title: 'IMAG0769',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0770',
			extension: 'jpg',
			title: 'IMAG0770',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0771',
			extension: 'jpg',
			title: 'IMAG0771',
			layout: 'portrait'
		},
		{
			filename: 'IMAG0790',
			extension: 'jpg',
			title: 'IMAG0790',
			layout: 'landscape'
		},
		{
			filename: 'mom-maggie-and-marie',
			extension: 'jpg',
			title: 'mom-maggie-and-marie',
			layout: 'landscape'
		},
	]
}

var GalleryImage = React.createClass({
	render: function () {
		return (
			<div className={this.props.className}>
				<a href={this.props.page}><img src={this.props.src} alt={this.props.title} /></a>
			</div>
		)
	}
});

var Gallery = React.createClass({
	render: function () {
		var imageNodes = data.photos.map(function (image) {
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
			<main className="content pure-g">
				<div id="gallery" className="pure-u-1 gallery isotope">
					{imageNodes}
				</div>
			</main>
		);
	}
});

module.exports = Gallery;