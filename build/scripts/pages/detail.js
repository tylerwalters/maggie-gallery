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
			.then(function(res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhU2VydmljZSA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZGF0YScpO1xuXG52YXIgRGV0YWlsSW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBwcmVwYXJlZERhdGEgPSB7XG5cdFx0XHRzcmM6ICcuLi9pbWFnZXMvJyArIHRoaXMucHJvcHMuaXRlbS5maWxlbmFtZSArICcuZGVzay4nICsgdGhpcy5wcm9wcy5pdGVtLmV4dGVuc2lvbixcblx0XHRcdGxhcmdlOiAnLi4vaW1hZ2VzLycgKyB0aGlzLnByb3BzLml0ZW0uZmlsZW5hbWUgKyAnLmxhcmdlLicgKyB0aGlzLnByb3BzLml0ZW0uZXh0ZW5zaW9uXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19tZWRpYSBwdXJlLXUtMS0yXCI+XG5cdFx0XHRcdDxhIGhyZWY9e3ByZXBhcmVkRGF0YS5sYXJnZX0+PGltZyBzcmM9e3ByZXBhcmVkRGF0YS5zcmN9IGFsdD17dGhpcy5wcm9wcy5pdGVtLnRpdGxlfSAvPjwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgRGV0YWlsRGVzY3JpcHRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9fZGVzY3JpcHRpb24gcHVyZS11LTEtMlwiPlxuXHRcdFx0XHQ8cD5UaXRsZToge3RoaXMucHJvcHMuaXRlbS50aXRsZX08L3A+XG5cdFx0XHRcdDxwPkRhdGU6IHt0aGlzLnByb3BzLml0ZW0uZGF0ZX08L3A+XG5cdFx0XHRcdDxwPlRhZ3M6IHt0aGlzLnByb3BzLml0ZW0udGFnc308L3A+XG5cdFx0XHRcdDxwPlBlb3BsZToge3RoaXMucHJvcHMuaXRlbS5wZW9wbGV9PC9wPlxuXHRcdFx0XHQ8cD5TaXplOiB7dGhpcy5wcm9wcy5pdGVtLmRpbWVuc2lvbnN9PC9wPlxuXHRcdFx0XHQ8cD5GaWxlbmFtZToge3RoaXMucHJvcHMuaXRlbS5maWxlbmFtZX08L3A+XG5cdFx0XHRcdDxwPkRlc2NyaXB0aW9uOiB7dGhpcy5wcm9wcy5pdGVtLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG52YXIgRGV0YWlsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW3tcblx0XHRcdFx0ZmlsZW5hbWU6ICcnLFxuXHRcdFx0XHRleHRlbnNpb246ICcnLFxuXHRcdFx0XHR0aXRsZTogJydcblx0XHRcdH1dLFxuXHRcdFx0Ymc6ICcnXG5cdFx0fVxuXHR9LFxuXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0RGF0YVNlcnZpY2Uuc2V0RGF0YSgpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogRGF0YVNlcnZpY2UuZ2V0SXRlbSh0aGlzLnByb3BzLnBhcmFtcy5tZWRpYUlkKX0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtiZzogJ3VybCguLi9pbWFnZXMvJyArIHRoaXMuc3RhdGUuZGF0YVswXS5maWxlbmFtZSArICcuYmcuJyArIHRoaXMuc3RhdGUuZGF0YVswXS5leHRlbnNpb24gKyAnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyIGZpeGVkJ30pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc3R5bGUgPSB7YmFja2dyb3VuZDogdGhpcy5zdGF0ZS5iZ307XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiZGV0YWlsIGNvbnRlbnQgcHVyZS1nXCIgc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlIHB1cmUtdS0xLTFcIj57dGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxEZXRhaWxJbWFnZSBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbiBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsRGVzY3JpcHRpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsOyJdLCJmaWxlIjoicGFnZXMvZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=