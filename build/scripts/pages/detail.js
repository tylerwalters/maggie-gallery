var DataService = require('../modules/data'),
    environment,
    imagesDir;

environment = (window.location.host.indexOf('localhost') === -1) ? 'prod' : 'dev';
imagesDir = (environment === 'prod') ? '~/app/images' : '../images/';

var DetailImage = React.createClass({displayName: "DetailImage",
  render: function () {
    var preparedData = {
      src: imagesDir + this.props.item.filename + '.desk.' + this.props.item.extension,
      large: imagesDir + this.props.item.filename + '.large.' + this.props.item.extension
    }

    return (
      React.createElement("div", {className: "detail__media pure-u-1-2"}, 
        React.createElement("a", {href: preparedData.large}, React.createElement("img", {src: preparedData.src, alt: this.props.item.title}))
      )
    );
  }
});

var DetailDescription = React.createClass({displayName: "DetailDescription",
  render: function () {
    return (
      React.createElement("div", {className: "detail__description pure-u-1-2"}, 
        React.createElement("p", null, "Title: ", this.props.item.title), 

        React.createElement("p", null, "Date: ", this.props.item.date), 

        React.createElement("p", null, "Tags: ", this.props.item.tags), 

        React.createElement("p", null, "People: ", this.props.item.people), 

        React.createElement("p", null, "Size: ", this.props.item.dimensions), 

        React.createElement("p", null, "Filename: ", this.props.item.filename), 

        React.createElement("p", null, "Description: ", this.props.item.description)
      )
    );
  }
});

var Detail = React.createClass({displayName: "Detail",
  getInitialState: function () {
    return {
      data: [{
        filename: '',
        extension: '',
        title: ''
      }],
      bg: ''
    }
  },

  componentDidMount: function () {
    DataService.setData()
      .then(function (res) {
        this.setState({data: DataService.getItem(this.props.params.mediaId)});
        this.setState({bg: 'url(' + imagesDir + this.state.data[0].filename + '.bg.' + this.state.data[0].extension + ') no-repeat center center / cover fixed'});
      }.bind(this));
  },

  render: function () {
    var style = {background: this.state.bg};

    return (
      React.createElement("main", {className: "detail content pure-g", style: style}, 
        React.createElement("h1", {className: "title pure-u-1-1"}, this.state.data[0].title), 
        React.createElement(DetailImage, {item: this.state.data[0]}), 
        React.createElement(DetailDescription, {item: this.state.data[0]})
      )
    );
  }
});

module.exports = Detail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhU2VydmljZSA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZGF0YScpLFxuICAgIGVudmlyb25tZW50LFxuICAgIGltYWdlc0RpcjtcblxuZW52aXJvbm1lbnQgPSAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPT09IC0xKSA/ICdwcm9kJyA6ICdkZXYnO1xuaW1hZ2VzRGlyID0gKGVudmlyb25tZW50ID09PSAncHJvZCcpID8gJ34vYXBwL2ltYWdlcycgOiAnLi4vaW1hZ2VzLyc7XG5cbnZhciBEZXRhaWxJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZXBhcmVkRGF0YSA9IHtcbiAgICAgIHNyYzogaW1hZ2VzRGlyICsgdGhpcy5wcm9wcy5pdGVtLmZpbGVuYW1lICsgJy5kZXNrLicgKyB0aGlzLnByb3BzLml0ZW0uZXh0ZW5zaW9uLFxuICAgICAgbGFyZ2U6IGltYWdlc0RpciArIHRoaXMucHJvcHMuaXRlbS5maWxlbmFtZSArICcubGFyZ2UuJyArIHRoaXMucHJvcHMuaXRlbS5leHRlbnNpb25cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX21lZGlhIHB1cmUtdS0xLTJcIj5cbiAgICAgICAgPGEgaHJlZj17cHJlcGFyZWREYXRhLmxhcmdlfT48aW1nIHNyYz17cHJlcGFyZWREYXRhLnNyY30gYWx0PXt0aGlzLnByb3BzLml0ZW0udGl0bGV9Lz48L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIERldGFpbERlc2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2Rlc2NyaXB0aW9uIHB1cmUtdS0xLTJcIj5cbiAgICAgICAgPHA+VGl0bGU6IHt0aGlzLnByb3BzLml0ZW0udGl0bGV9PC9wPlxuXG4gICAgICAgIDxwPkRhdGU6IHt0aGlzLnByb3BzLml0ZW0uZGF0ZX08L3A+XG5cbiAgICAgICAgPHA+VGFnczoge3RoaXMucHJvcHMuaXRlbS50YWdzfTwvcD5cblxuICAgICAgICA8cD5QZW9wbGU6IHt0aGlzLnByb3BzLml0ZW0ucGVvcGxlfTwvcD5cblxuICAgICAgICA8cD5TaXplOiB7dGhpcy5wcm9wcy5pdGVtLmRpbWVuc2lvbnN9PC9wPlxuXG4gICAgICAgIDxwPkZpbGVuYW1lOiB7dGhpcy5wcm9wcy5pdGVtLmZpbGVuYW1lfTwvcD5cblxuICAgICAgICA8cD5EZXNjcmlwdGlvbjoge3RoaXMucHJvcHMuaXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIERldGFpbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFt7XG4gICAgICAgIGZpbGVuYW1lOiAnJyxcbiAgICAgICAgZXh0ZW5zaW9uOiAnJyxcbiAgICAgICAgdGl0bGU6ICcnXG4gICAgICB9XSxcbiAgICAgIGJnOiAnJ1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIERhdGFTZXJ2aWNlLnNldERhdGEoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBEYXRhU2VydmljZS5nZXRJdGVtKHRoaXMucHJvcHMucGFyYW1zLm1lZGlhSWQpfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JnOiAndXJsKCcgKyBpbWFnZXNEaXIgKyB0aGlzLnN0YXRlLmRhdGFbMF0uZmlsZW5hbWUgKyAnLmJnLicgKyB0aGlzLnN0YXRlLmRhdGFbMF0uZXh0ZW5zaW9uICsgJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciBmaXhlZCd9KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0eWxlID0ge2JhY2tncm91bmQ6IHRoaXMuc3RhdGUuYmd9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImRldGFpbCBjb250ZW50IHB1cmUtZ1wiIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBwdXJlLXUtMS0xXCI+e3RoaXMuc3RhdGUuZGF0YVswXS50aXRsZX08L2gxPlxuICAgICAgICA8RGV0YWlsSW1hZ2UgaXRlbT17dGhpcy5zdGF0ZS5kYXRhWzBdfT48L0RldGFpbEltYWdlPlxuICAgICAgICA8RGV0YWlsRGVzY3JpcHRpb24gaXRlbT17dGhpcy5zdGF0ZS5kYXRhWzBdfT48L0RldGFpbERlc2NyaXB0aW9uPlxuICAgICAgPC9tYWluPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGFpbDsiXSwiZmlsZSI6InBhZ2VzL2RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9