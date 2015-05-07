var Isotope      = require('isotope-layout'),
    imagesLoaded = require('imagesloaded');

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
        src: '../images/' + image.filename + '.desk.' + image.extension
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlICAgICAgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpLFxuICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpO1xuXG52YXIgR2FsbGVyeUltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5wYWdlfT48aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0vPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnlfX2JveCcpLFxuICAgICAgICBpc287XG5cbiAgICBpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuICAgICAgaXNvID0gbmV3IElzb3RvcGUoZ2FsbGVyeSwge1xuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeV9faW1hZ2UnLFxuICAgICAgICBtYXNvbnJ5OiB7XG4gICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9faW1hZ2UtLXBvcnRyYWl0JyxcbiAgICAgICAgICBndXR0ZXI6IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGltYWdlTm9kZXM7XG5cbiAgICBpbWFnZU5vZGVzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHZhciBwcmVwYXJlZERhdGEgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2dhbGxlcnlfX2ltYWdlIGdhbGxlcnlfX2ltYWdlLS0nICsgaW1hZ2UubGF5b3V0LFxuICAgICAgICBwYWdlOiAnL2RldGFpbC8nICsgaW1hZ2UudGl0bGUsXG4gICAgICAgIHNyYzogJy4uL2ltYWdlcy8nICsgaW1hZ2UuZmlsZW5hbWUgKyAnLmRlc2suJyArIGltYWdlLmV4dGVuc2lvblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8R2FsbGVyeUltYWdlIGNsYXNzTmFtZT17cHJlcGFyZWREYXRhLmNsYXNzTmFtZX0gcGFnZT17cHJlcGFyZWREYXRhLnBhZ2V9IHNyYz17cHJlcGFyZWREYXRhLnNyY31cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuICAgICAgKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJnYWxsZXJ5X19ib3hcIiBjbGFzcz1cImdhbGxlcnlfX2JveFwiPlxuICAgICAgICAgIHtpbWFnZU5vZGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxlcnk7Il0sImZpbGUiOiJjb21wb25lbnRzL2dhbGxlcnkuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==