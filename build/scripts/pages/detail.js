var DataService = require('../modules/data');

var DetailImage = React.createClass({displayName: "DetailImage",
	render: function () {
		var preparedData = {
			src: '../images/' + this.props.item.filename + '.desk.' + this.props.item.extension
		}

		return (
			React.createElement("div", {className: "detail__media pure-u-1-2"}, 
				React.createElement("img", {src: preparedData.src, alt: this.props.item.title})
			)
		);
	}
});

var DetailDescription = React.createClass({displayName: "DetailDescription",
	render: function () {
		return (
			React.createElement("div", {className: "detail__description pure-u-1-2"}, 
				React.createElement("p", null, this.props.item)
			)
		);
	}
});

var Detail = React.createClass({displayName: "Detail",
	getInitialState: function () {
		return {data: [{
			filename: '',
			extension: '',
			title: ''
		}]};
	},

	componentDidMount: function () {
		DataService.setData()
			.then(function(res) {
				this.setState({data: DataService.getItem(this.props.params.mediaId)});
			}.bind(this));
	},

	contextTypes: {
		router: React.PropTypes.func
	},

	render: function () {
		return (
			React.createElement("main", {className: "detail content pure-g"}, 
				React.createElement("h1", {className: "title pure-u-1-1"}, this.state.data[0].title), 
				React.createElement(DetailImage, {item: this.state.data[0]}), 
				React.createElement(DetailDescription, {item: this.state.data[0]})
			)
		);
	}
});

module.exports = Detail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEYXRhU2VydmljZSA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZGF0YScpO1xuXG52YXIgRGV0YWlsSW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBwcmVwYXJlZERhdGEgPSB7XG5cdFx0XHRzcmM6ICcuLi9pbWFnZXMvJyArIHRoaXMucHJvcHMuaXRlbS5maWxlbmFtZSArICcuZGVzay4nICsgdGhpcy5wcm9wcy5pdGVtLmV4dGVuc2lvblxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9fbWVkaWEgcHVyZS11LTEtMlwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17cHJlcGFyZWREYXRhLnNyY30gYWx0PXt0aGlzLnByb3BzLml0ZW0udGl0bGV9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbERlc2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2Rlc2NyaXB0aW9uIHB1cmUtdS0xLTJcIj5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMuaXRlbX08L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtkYXRhOiBbe1xuXHRcdFx0ZmlsZW5hbWU6ICcnLFxuXHRcdFx0ZXh0ZW5zaW9uOiAnJyxcblx0XHRcdHRpdGxlOiAnJ1xuXHRcdH1dfTtcblx0fSxcblxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuXHRcdERhdGFTZXJ2aWNlLnNldERhdGEoKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IERhdGFTZXJ2aWNlLmdldEl0ZW0odGhpcy5wcm9wcy5wYXJhbXMubWVkaWFJZCl9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH0sXG5cblx0Y29udGV4dFR5cGVzOiB7XG5cdFx0cm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJkZXRhaWwgY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlIHB1cmUtdS0xLTFcIj57dGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxEZXRhaWxJbWFnZSBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbiBpdGVtPXt0aGlzLnN0YXRlLmRhdGFbMF19PjwvRGV0YWlsRGVzY3JpcHRpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsOyJdLCJmaWxlIjoicGFnZXMvZGV0YWlsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=