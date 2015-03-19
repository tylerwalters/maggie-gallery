var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({displayName: "Home",
	sortData: function () {
		this.setState({data: this.state.data.sort()});
	},
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function () {
		DataService.setData()
			.then(function(res) {
				this.setState({data: DataService.getData()});
			}.bind(this));
	},
	render: function (data) {
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement(Gallery, {data: this.state.data, sortData: this.sortData})
			)
		);
	}
});

module.exports = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRHYWxsZXJ5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9nYWxsZXJ5Jyk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRzb3J0RGF0YTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IHRoaXMuc3RhdGUuZGF0YS5zb3J0KCl9KTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtkYXRhOiBbXX07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0RGF0YVNlcnZpY2Uuc2V0RGF0YSgpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogRGF0YVNlcnZpY2UuZ2V0RGF0YSgpfSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxHYWxsZXJ5IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gc29ydERhdGE9e3RoaXMuc29ydERhdGF9PjwvR2FsbGVyeT5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lOyJdLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9