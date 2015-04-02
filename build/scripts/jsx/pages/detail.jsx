var DataService = require('../modules/data');

var DetailImage = React.createClass({
	render: function () {
		var preparedData = {
			src: '../images/' + this.props.item.filename + '.desk.' + this.props.item.extension
		}

		return (
			<div className="detail__media pure-u-1-2">
				<img src={preparedData.src} alt={this.props.item.title} />
			</div>
		);
	}
});

var DetailDescription = React.createClass({
	render: function () {
		return (
			<div className="detail__description pure-u-1-2">
				<p>{this.props.item}</p>
			</div>
		);
	}
});

var Detail = React.createClass({
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
			<main className="detail content pure-g">
				<h1 className="title pure-u-1-1">{this.state.data[0].title}</h1>
				<DetailImage item={this.state.data[0]}></DetailImage>
				<DetailDescription item={this.state.data[0]}></DetailDescription>
			</main>
		);
	}
});

module.exports = Detail;