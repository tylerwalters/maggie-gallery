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
				this.setState({data: DataService.sortByShuffle()});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRHYWxsZXJ5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9nYWxsZXJ5Jyk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRzb3J0RGF0YTogZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IHRoaXMuc3RhdGUuZGF0YS5zb3J0KCl9KTtcblx0fSxcblxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge2RhdGE6IFtdfTtcblx0fSxcblxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuXHRcdERhdGFTZXJ2aWNlLnNldERhdGEoKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IERhdGFTZXJ2aWNlLnNvcnRCeVNodWZmbGUoKX0pO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0fSxcblx0XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PEdhbGxlcnkgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBzb3J0RGF0YT17dGhpcy5zb3J0RGF0YX0+PC9HYWxsZXJ5PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWU7Il0sImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=