var DataService = require('../modules/data'),
		Gallery = require('../components/gallery');

var Home = React.createClass({
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function () {
		this.setState({data: DataService.setData()});
	},
	render: function (data) {
		return (
			<main className="content pure-g">
				<Gallery data={this.state.data}></Gallery>
			</main>
		);
	}
});

module.exports = Home;