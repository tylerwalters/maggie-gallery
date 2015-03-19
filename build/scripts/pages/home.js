var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({displayName: "Home",
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
				React.createElement(Gallery, {data: this.state.data})
			)
		);
	}
});

module.exports = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRHYWxsZXJ5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9nYWxsZXJ5Jyk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge2RhdGE6IFtdfTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHREYXRhU2VydmljZS5zZXREYXRhKClcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtkYXRhOiBEYXRhU2VydmljZS5nZXREYXRhKCl9KTtcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PEdhbGxlcnkgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfT48L0dhbGxlcnk+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTsiXSwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==