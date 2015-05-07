var DataService = require('../modules/data');

var DetailImage = React.createClass({displayName: "DetailImage",
  render: function () {
    var preparedData = {
      src: '../images/' + this.props.item.filename + '.desk.' + this.props.item.extension,
      large: '../images/' + this.props.item.filename + '.large.' + this.props.item.extension
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
        this.setState({bg: 'url(../images/' + this.state.data[0].filename + '.bg.' + this.state.data[0].extension + ') no-repeat center center / cover fixed'});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhU2VydmljZSA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZGF0YScpO1xuXG52YXIgRGV0YWlsSW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmVwYXJlZERhdGEgPSB7XG4gICAgICBzcmM6ICcuLi9pbWFnZXMvJyArIHRoaXMucHJvcHMuaXRlbS5maWxlbmFtZSArICcuZGVzay4nICsgdGhpcy5wcm9wcy5pdGVtLmV4dGVuc2lvbixcbiAgICAgIGxhcmdlOiAnLi4vaW1hZ2VzLycgKyB0aGlzLnByb3BzLml0ZW0uZmlsZW5hbWUgKyAnLmxhcmdlLicgKyB0aGlzLnByb3BzLml0ZW0uZXh0ZW5zaW9uXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19tZWRpYSBwdXJlLXUtMS0yXCI+XG4gICAgICAgIDxhIGhyZWY9e3ByZXBhcmVkRGF0YS5sYXJnZX0+PGltZyBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9IGFsdD17dGhpcy5wcm9wcy5pdGVtLnRpdGxlfS8+PC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBEZXRhaWxEZXNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19kZXNjcmlwdGlvbiBwdXJlLXUtMS0yXCI+XG4gICAgICAgIDxwPlRpdGxlOiB7dGhpcy5wcm9wcy5pdGVtLnRpdGxlfTwvcD5cblxuICAgICAgICA8cD5EYXRlOiB7dGhpcy5wcm9wcy5pdGVtLmRhdGV9PC9wPlxuXG4gICAgICAgIDxwPlRhZ3M6IHt0aGlzLnByb3BzLml0ZW0udGFnc308L3A+XG5cbiAgICAgICAgPHA+UGVvcGxlOiB7dGhpcy5wcm9wcy5pdGVtLnBlb3BsZX08L3A+XG5cbiAgICAgICAgPHA+U2l6ZToge3RoaXMucHJvcHMuaXRlbS5kaW1lbnNpb25zfTwvcD5cblxuICAgICAgICA8cD5GaWxlbmFtZToge3RoaXMucHJvcHMuaXRlbS5maWxlbmFtZX08L3A+XG5cbiAgICAgICAgPHA+RGVzY3JpcHRpb246IHt0aGlzLnByb3BzLml0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBEZXRhaWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbe1xuICAgICAgICBmaWxlbmFtZTogJycsXG4gICAgICAgIGV4dGVuc2lvbjogJycsXG4gICAgICAgIHRpdGxlOiAnJ1xuICAgICAgfV0sXG4gICAgICBiZzogJydcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBEYXRhU2VydmljZS5zZXREYXRhKClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogRGF0YVNlcnZpY2UuZ2V0SXRlbSh0aGlzLnByb3BzLnBhcmFtcy5tZWRpYUlkKX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtiZzogJ3VybCguLi9pbWFnZXMvJyArIHRoaXMuc3RhdGUuZGF0YVswXS5maWxlbmFtZSArICcuYmcuJyArIHRoaXMuc3RhdGUuZGF0YVswXS5leHRlbnNpb24gKyAnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIGZpeGVkJ30pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGUgPSB7YmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iZ307XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZGV0YWlsIGNvbnRlbnQgcHVyZS1nXCIgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlIHB1cmUtdS0xLTFcIj57dGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfTwvaDE+XG4gICAgICAgIDxEZXRhaWxJbWFnZSBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsSW1hZ2U+XG4gICAgICAgIDxEZXRhaWxEZXNjcmlwdGlvbiBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsRGVzY3JpcHRpb24+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsOyJdLCJmaWxlIjoicGFnZXMvZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=