var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({displayName: "Home",
	sortData: function (sortBy) {
		var sortedData;

		switch (sortBy) {
			case 'shuffle':
				sortedData = DataService.sortByShuffle(this.state.data);
				break;
			case 'date':
				sortedData = DataService.sortByDate(this.state.data);
				break;
			case 'title':
				sortedData = DataService.sortByTitle(this.state.data);
				break;
			default:
				sortedData = DataService.sortByShuffle(this.state.data);
				break;
		}

		this.setState({data: sortedData});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRHYWxsZXJ5ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9nYWxsZXJ5Jyk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRzb3J0RGF0YTogZnVuY3Rpb24gKHNvcnRCeSkge1xuXHRcdHZhciBzb3J0ZWREYXRhO1xuXG5cdFx0c3dpdGNoIChzb3J0QnkpIHtcblx0XHRcdGNhc2UgJ3NodWZmbGUnOlxuXHRcdFx0XHRzb3J0ZWREYXRhID0gRGF0YVNlcnZpY2Uuc29ydEJ5U2h1ZmZsZSh0aGlzLnN0YXRlLmRhdGEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRzb3J0ZWREYXRhID0gRGF0YVNlcnZpY2Uuc29ydEJ5RGF0ZSh0aGlzLnN0YXRlLmRhdGEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RpdGxlJzpcblx0XHRcdFx0c29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeVRpdGxlKHRoaXMuc3RhdGUuZGF0YSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0c29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeVNodWZmbGUodGhpcy5zdGF0ZS5kYXRhKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogc29ydGVkRGF0YX0pO1xuXHR9LFxuXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7ZGF0YTogW119O1xuXHR9LFxuXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0RGF0YVNlcnZpY2Uuc2V0RGF0YSgpXG5cdFx0XHQudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0YTogRGF0YVNlcnZpY2Uuc29ydEJ5U2h1ZmZsZSgpfSk7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9LFxuXHRcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8R2FsbGVyeSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHNvcnREYXRhPXt0aGlzLnNvcnREYXRhfT48L0dhbGxlcnk+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTsiXSwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==