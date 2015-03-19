var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({
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
			<main className="content pure-g">
				<Gallery data={this.state.data} sortData={this.sortData}></Gallery>
			</main>
		);
	}
});

module.exports = Home;