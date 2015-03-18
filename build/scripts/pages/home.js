var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({displayName: "Home",
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function () {
		DataService.setData().then(function(response) {
			console.log('test');
			console.log(response);
			this.setState({data: response});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRHYWxsZXJ5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9nYWxsZXJ5Jyk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge2RhdGE6IFtdfTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcblx0XHREYXRhU2VydmljZS5zZXREYXRhKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Rlc3QnKTtcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3BvbnNlfSk7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8R2FsbGVyeSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9PjwvR2FsbGVyeT5cblx0XHRcdDwvbWFpbj5cblx0XHQpO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lOyJdLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9