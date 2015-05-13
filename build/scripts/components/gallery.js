var Isotope      = require('isotope-layout'),
    imagesLoaded = require('imagesloaded'),
    environment,
    imagesDir;

environment = (window.location.host.indexOf('localhost') === -1) ? 'prod' : 'dev';
imagesDir = (environment === 'prod') ? '~/app/images' : '../images/';

var GalleryImage = React.createClass({displayName: "GalleryImage",
  render: function () {
    return (
      React.createElement("div", {className: this.props.className}, 
        React.createElement("a", {href: this.props.page}, React.createElement("img", {src: this.props.src, alt: this.props.title}))
      )
    )
  }
});

var Gallery = React.createClass({displayName: "Gallery",
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
        src: imagesDir + '/' + image.filename + '.desk.' + image.extension
      }

      return (
        React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, 
                      title: image.title})
      )
    });

    return (
      React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
        React.createElement("div", {id: "gallery__box", class: "gallery__box"}, 
          imageNodes
        )
      )
    );
  }
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlICAgICAgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpLFxuICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpLFxuICAgIGVudmlyb25tZW50LFxuICAgIGltYWdlc0RpcjtcblxuZW52aXJvbm1lbnQgPSAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPT09IC0xKSA/ICdwcm9kJyA6ICdkZXYnO1xuaW1hZ2VzRGlyID0gKGVudmlyb25tZW50ID09PSAncHJvZCcpID8gJ34vYXBwL2ltYWdlcycgOiAnLi4vaW1hZ2VzLyc7XG5cbnZhciBHYWxsZXJ5SW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLnBhZ2V9PjxpbWcgc3JjPXt0aGlzLnByb3BzLnNyY30gYWx0PXt0aGlzLnByb3BzLnRpdGxlfS8+PC9hPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxudmFyIEdhbGxlcnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeV9fYm94JyksXG4gICAgICAgIGlzbztcblxuICAgIGltYWdlc0xvYWRlZChnYWxsZXJ5LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpc28gPSBuZXcgSXNvdG9wZShnYWxsZXJ5LCB7XG4gICAgICAgIGl0ZW1TZWxlY3RvcjogJy5nYWxsZXJ5X19pbWFnZScsXG4gICAgICAgIG1hc29ucnk6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aDogJy5nYWxsZXJ5X19pbWFnZS0tcG9ydHJhaXQnLFxuICAgICAgICAgIGd1dHRlcjogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW1hZ2VOb2RlcztcblxuICAgIGltYWdlTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgdmFyIHByZXBhcmVkRGF0YSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG4gICAgICAgIHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcbiAgICAgICAgc3JjOiBpbWFnZXNEaXIgKyAnLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbWFnZS50aXRsZX0+PC9HYWxsZXJ5SW1hZ2U+XG4gICAgICApXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cbiAgICAgICAgPGRpdiBpZD1cImdhbGxlcnlfX2JveFwiIGNsYXNzPVwiZ2FsbGVyeV9fYm94XCI+XG4gICAgICAgICAge2ltYWdlTm9kZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FsbGVyeTsiXSwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9