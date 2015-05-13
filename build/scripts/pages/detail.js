var DataService = require('../modules/data'),
    environment,
    imagesDir;

environment = (window.location.host.indexOf('localhost') === -1) ? 'prod' : 'dev';
imagesDir = (environment === 'prod') ? '/app/images' : '../images/';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhU2VydmljZSA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZGF0YScpLFxuICAgIGVudmlyb25tZW50LFxuICAgIGltYWdlc0RpcjtcblxuZW52aXJvbm1lbnQgPSAod2luZG93LmxvY2F0aW9uLmhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPT09IC0xKSA/ICdwcm9kJyA6ICdkZXYnO1xuaW1hZ2VzRGlyID0gKGVudmlyb25tZW50ID09PSAncHJvZCcpID8gJy9hcHAvaW1hZ2VzJyA6ICcuLi9pbWFnZXMvJztcblxudmFyIERldGFpbEltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJlcGFyZWREYXRhID0ge1xuICAgICAgc3JjOiBpbWFnZXNEaXIgKyB0aGlzLnByb3BzLml0ZW0uZmlsZW5hbWUgKyAnLmRlc2suJyArIHRoaXMucHJvcHMuaXRlbS5leHRlbnNpb24sXG4gICAgICBsYXJnZTogaW1hZ2VzRGlyICsgdGhpcy5wcm9wcy5pdGVtLmZpbGVuYW1lICsgJy5sYXJnZS4nICsgdGhpcy5wcm9wcy5pdGVtLmV4dGVuc2lvblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9fbWVkaWEgcHVyZS11LTEtMlwiPlxuICAgICAgICA8YSBocmVmPXtwcmVwYXJlZERhdGEubGFyZ2V9PjxpbWcgc3JjPXtwcmVwYXJlZERhdGEuc3JjfSBhbHQ9e3RoaXMucHJvcHMuaXRlbS50aXRsZX0vPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgRGV0YWlsRGVzY3JpcHRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9fZGVzY3JpcHRpb24gcHVyZS11LTEtMlwiPlxuICAgICAgICA8cD5UaXRsZToge3RoaXMucHJvcHMuaXRlbS50aXRsZX08L3A+XG5cbiAgICAgICAgPHA+RGF0ZToge3RoaXMucHJvcHMuaXRlbS5kYXRlfTwvcD5cblxuICAgICAgICA8cD5UYWdzOiB7dGhpcy5wcm9wcy5pdGVtLnRhZ3N9PC9wPlxuXG4gICAgICAgIDxwPlBlb3BsZToge3RoaXMucHJvcHMuaXRlbS5wZW9wbGV9PC9wPlxuXG4gICAgICAgIDxwPlNpemU6IHt0aGlzLnByb3BzLml0ZW0uZGltZW5zaW9uc308L3A+XG5cbiAgICAgICAgPHA+RmlsZW5hbWU6IHt0aGlzLnByb3BzLml0ZW0uZmlsZW5hbWV9PC9wPlxuXG4gICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7dGhpcy5wcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgRGV0YWlsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogW3tcbiAgICAgICAgZmlsZW5hbWU6ICcnLFxuICAgICAgICBleHRlbnNpb246ICcnLFxuICAgICAgICB0aXRsZTogJydcbiAgICAgIH1dLFxuICAgICAgYmc6ICcnXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgRGF0YVNlcnZpY2Uuc2V0RGF0YSgpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IERhdGFTZXJ2aWNlLmdldEl0ZW0odGhpcy5wcm9wcy5wYXJhbXMubWVkaWFJZCl9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ymc6ICd1cmwoJyArIGltYWdlc0RpciArIHRoaXMuc3RhdGUuZGF0YVswXS5maWxlbmFtZSArICcuYmcuJyArIHRoaXMuc3RhdGUuZGF0YVswXS5leHRlbnNpb24gKyAnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIGZpeGVkJ30pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGUgPSB7YmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iZ307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZGV0YWlsIGNvbnRlbnQgcHVyZS1nXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHB1cmUtdS0xLTFcIj57dGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfTwvaDE+XG4gICAgICAgIDxEZXRhaWxJbWFnZSBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsSW1hZ2U+XG4gICAgICAgIDxEZXRhaWxEZXNjcmlwdGlvbiBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsRGVzY3JpcHRpb24+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsOyJdLCJmaWxlIjoicGFnZXMvZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=