var Isotope      = require('isotope-layout'),
    imagesLoaded = require('imagesloaded');

var GalleryImage = React.createClass({
  render: function () {
    return (
      <div className={this.props.className}>
        <a href={this.props.page}><img src={this.props.src} alt={this.props.title}/></a>
      </div>
    )
  }
});

var Gallery = React.createClass({
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
    });
  },

  render: function () {
    var imageNodes;

    imageNodes = this.props.data.map(function (image) {
      var preparedData = {
        className: 'gallery__image gallery__image--' + image.layout,
        page: '/detail/' + image.title,
        src: '../images/' + image.filename + '.desk.' + image.extension
      }

      return (
        <GalleryImage className={preparedData.className} page={preparedData.page} src={preparedData.src}
                      title={image.title}></GalleryImage>
      )
    });

    return (
      <div id="gallery" className="pure-u-1 gallery isotope">
        <div id="gallery__box" class="gallery__box">
          {imageNodes}
        </div>
      </div>
    );
  }
});

module.exports = Gallery;