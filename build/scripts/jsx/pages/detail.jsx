var DataService = require('../modules/data'),
    environment,
    imagesDir;

environment = (window.location.host.indexOf('localhost') === -1) ? 'prod' : 'dev';
imagesDir = (environment === 'prod') ? '~/app/images' : '../images/';

var DetailImage = React.createClass({
  render: function () {
    var preparedData = {
      src: imagesDir + this.props.item.filename + '.desk.' + this.props.item.extension,
      large: imagesDir + this.props.item.filename + '.large.' + this.props.item.extension
    }

    return (
      <div className="detail__media pure-u-1-2">
        <a href={preparedData.large}><img src={preparedData.src} alt={this.props.item.title}/></a>
      </div>
    );
  }
});

var DetailDescription = React.createClass({
  render: function () {
    return (
      <div className="detail__description pure-u-1-2">
        <p>Title: {this.props.item.title}</p>

        <p>Date: {this.props.item.date}</p>

        <p>Tags: {this.props.item.tags}</p>

        <p>People: {this.props.item.people}</p>

        <p>Size: {this.props.item.dimensions}</p>

        <p>Filename: {this.props.item.filename}</p>

        <p>Description: {this.props.item.description}</p>
      </div>
    );
  }
});

var Detail = React.createClass({
  getInitialState: function () {
    return {
      data: [{
        filename: '',
        extension: '',
        title: ''
      }],
      bg: ''
    }
  },

  componentDidMount: function () {
    DataService.setData()
      .then(function (res) {
        this.setState({data: DataService.getItem(this.props.params.mediaId)});
        this.setState({bg: 'url(' + imagesDir + this.state.data[0].filename + '.bg.' + this.state.data[0].extension + ') no-repeat center center / cover fixed'});
      }.bind(this));
  },

  render: function () {
    var style = {background: this.state.bg};

    return (
      <main className="detail content pure-g" style={style}>
        <h1 className="title pure-u-1-1">{this.state.data[0].title}</h1>
        <DetailImage item={this.state.data[0]}></DetailImage>
        <DetailDescription item={this.state.data[0]}></DetailDescription>
      </main>
    );
  }
});

module.exports = Detail;