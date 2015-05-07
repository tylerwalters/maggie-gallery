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

var GallerySortItem = React.createClass({displayName: "GallerySortItem",
  render: function () {
    return (
      React.createElement("li", null, 
        React.createElement("button", {"data-sort": this.props.name, onClick: this.props.onClick}, this.props.display)
      )
    )
  }
});

var Gallery = React.createClass({displayName: "Gallery",
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
        React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, 
                      title: image.title})
      )
    });

    return (
      React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
        React.createElement("div", {className: "gallery__sort"}, 
          React.createElement("ul", null, 
            React.createElement(GallerySortItem, {name: "shuffle", display: "Shuffle", onClick: this.handleSort.bind(this, 'shuffle')}), 
            React.createElement(GallerySortItem, {name: "date", display: "Date", onClick: this.handleSort.bind(this, 'date')}), 
            React.createElement(GallerySortItem, {name: "title", display: "Title", onClick: this.handleSort.bind(this, 'title')})
          )
        ), 
        React.createElement("div", {id: "gallery__box", class: "gallery__box"}, 
          imageNodes
        )
      )
    );
  }
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBJc290b3BlICAgICAgPSByZXF1aXJlKCdpc290b3BlLWxheW91dCcpLFxuICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpO1xuXG52YXIgR2FsbGVyeUltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5wYWdlfT48aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9IGFsdD17dGhpcy5wcm9wcy50aXRsZX0vPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbnZhciBHYWxsZXJ5U29ydEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDxidXR0b24gZGF0YS1zb3J0PXt0aGlzLnByb3BzLm5hbWV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+e3RoaXMucHJvcHMuZGlzcGxheX08L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59KTtcblxudmFyIEdhbGxlcnkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGhhbmRsZVNvcnQ6IGZ1bmN0aW9uIChzb3J0VHlwZSkge1xuICAgIHRoaXMucHJvcHMuc29ydERhdGEoc29ydFR5cGUpO1xuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnlfX2JveCcpLFxuICAgICAgICBpc287XG5cbiAgICBpbWFnZXNMb2FkZWQoZ2FsbGVyeSwgZnVuY3Rpb24gKCkge1xuICAgICAgaXNvID0gbmV3IElzb3RvcGUoZ2FsbGVyeSwge1xuICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ2FsbGVyeV9faW1hZ2UnLFxuICAgICAgICBtYXNvbnJ5OiB7XG4gICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ2FsbGVyeV9faW1hZ2UtLXBvcnRyYWl0JyxcbiAgICAgICAgICBndXR0ZXI6IDBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW1hZ2VOb2RlcztcblxuICAgIGltYWdlTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgdmFyIHByZXBhcmVkRGF0YSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG4gICAgICAgIHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcbiAgICAgICAgc3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpbWFnZS50aXRsZX0+PC9HYWxsZXJ5SW1hZ2U+XG4gICAgICApXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImdhbGxlcnlcIiBjbGFzc05hbWU9XCJwdXJlLXUtMSBnYWxsZXJ5IGlzb3RvcGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X19zb3J0XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPEdhbGxlcnlTb3J0SXRlbSBuYW1lPVwic2h1ZmZsZVwiIGRpc3BsYXk9XCJTaHVmZmxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcywgJ3NodWZmbGUnKX0vPlxuICAgICAgICAgICAgPEdhbGxlcnlTb3J0SXRlbSBuYW1lPVwiZGF0ZVwiIGRpc3BsYXk9XCJEYXRlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTb3J0LmJpbmQodGhpcywgJ2RhdGUnKX0vPlxuICAgICAgICAgICAgPEdhbGxlcnlTb3J0SXRlbSBuYW1lPVwidGl0bGVcIiBkaXNwbGF5PVwiVGl0bGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNvcnQuYmluZCh0aGlzLCAndGl0bGUnKX0vPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZ2FsbGVyeV9fYm94XCIgY2xhc3M9XCJnYWxsZXJ5X19ib3hcIj5cbiAgICAgICAgICB7aW1hZ2VOb2Rlc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYWxsZXJ5OyJdLCJmaWxlIjoiY29tcG9uZW50cy9nYWxsZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=