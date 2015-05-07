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

var GallerySortItem = React.createClass({
  render: function () {
    return (
      <li>
        <button data-sort={this.props.name} onClick={this.props.onClick}>{this.props.display}</button>
      </li>
    )
  }
});

var Gallery = React.createClass({
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
        <div className="gallery__sort">
          <ul>
            <GallerySortItem name="shuffle" display="Shuffle" onClick={this.handleSort.bind(this, 'shuffle')}/>
            <GallerySortItem name="date" display="Date" onClick={this.handleSort.bind(this, 'date')}/>
            <GallerySortItem name="title" display="Title" onClick={this.handleSort.bind(this, 'title')}/>
          </ul>
        </div>
        <div id="gallery__box" class="gallery__box">
          {imageNodes}
        </div>
      </div>
    );
  }
});

module.exports = Gallery;