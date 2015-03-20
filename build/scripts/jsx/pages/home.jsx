var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({
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
			<main className="content pure-g">
				<Gallery data={this.state.data} sortData={this.sortData}></Gallery>
			</main>
		);
	}
});

module.exports = Home;