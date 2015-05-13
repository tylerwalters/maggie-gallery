var Isotope      = require('isotope-layout'),
    imagesLoaded = require('imagesloaded'),
    environment,
    imagesDir;

environment = (window.location.host.indexOf('localhost') === -1) ? 'prod' : 'dev';
imagesDir = (environment === 'prod') ? '/app/images' : '../images/';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlICAgICAgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpLFxuICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpLFxuICAgIGVudmlyb25tZW50LFxuICAgIGltYWdlc0RpcjtcblxuZW52aXJvbm1lbnQgPSAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPT09IC0xKSA/ICdwcm9kJyA6ICdkZXYnO1xuaW1hZ2VzRGlyID0gKGVudmlyb25tZW50ID09PSAncHJvZCcpID8gJy9hcHAvaW1hZ2VzJyA6ICcuLi9pbWFnZXMvJztcblxudmFyIEdhbGxlcnlJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxhIGhyZWY9e3RoaXMucHJvcHMucGFnZX0+PGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfSBhbHQ9e3RoaXMucHJvcHMudGl0bGV9Lz48L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgR2FsbGVyeSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5X19ib3gnKSxcbiAgICAgICAgaXNvO1xuXG4gICAgaW1hZ2VzTG9hZGVkKGdhbGxlcnksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzbyA9IG5ldyBJc290b3BlKGdhbGxlcnksIHtcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdhbGxlcnlfX2ltYWdlJyxcbiAgICAgICAgbWFzb25yeToge1xuICAgICAgICAgIGNvbHVtbldpZHRoOiAnLmdhbGxlcnlfX2ltYWdlLS1wb3J0cmFpdCcsXG4gICAgICAgICAgZ3V0dGVyOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbWFnZU5vZGVzO1xuXG4gICAgaW1hZ2VOb2RlcyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICB2YXIgcHJlcGFyZWREYXRhID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdnYWxsZXJ5X19pbWFnZSBnYWxsZXJ5X19pbWFnZS0tJyArIGltYWdlLmxheW91dCxcbiAgICAgICAgcGFnZTogJy9kZXRhaWwvJyArIGltYWdlLnRpdGxlLFxuICAgICAgICBzcmM6IGltYWdlc0RpciArICcvJyArIGltYWdlLmZpbGVuYW1lICsgJy5kZXNrLicgKyBpbWFnZS5leHRlbnNpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEdhbGxlcnlJbWFnZSBjbGFzc05hbWU9e3ByZXBhcmVkRGF0YS5jbGFzc05hbWV9IHBhZ2U9e3ByZXBhcmVkRGF0YS5wYWdlfSBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ltYWdlLnRpdGxlfT48L0dhbGxlcnlJbWFnZT5cbiAgICAgIClcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiZ2FsbGVyeVwiIGNsYXNzTmFtZT1cInB1cmUtdS0xIGdhbGxlcnkgaXNvdG9wZVwiPlxuICAgICAgICA8ZGl2IGlkPVwiZ2FsbGVyeV9fYm94XCIgY2xhc3M9XCJnYWxsZXJ5X19ib3hcIj5cbiAgICAgICAgICB7aW1hZ2VOb2Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsZXJ5OyJdLCJmaWxlIjoiY29tcG9uZW50cy9nYWxsZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=