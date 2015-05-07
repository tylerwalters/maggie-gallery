var DataService = require('../modules/data'),
    Header      = require('../components/header'),
    Gallery     = require('../components/gallery'),
    SlideToggle = require('../components/slideToggle'),
    Slideout    = require('slideout');

var SortButton = React.createClass({
  render: function () {
    return (
      <li>
        <button data-sort={this.props.name} onClick={this.props.onClick}>{this.props.display}</button>
      </li>
    )
  }
});

var Home = React.createClass({
  slideToggle: function () {
    this.slideout.toggle();
  },

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
      .then(function (res) {
        this.setState({data: DataService.sortByShuffle()});
      }.bind(this));

    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });
  },

  render: function (data) {
    return (
      <div class="page-home">
        <aside id="menu">
          <Header />

          <div className="gallery__sort">
            <ul>
              <SortButton name="shuffle" display="Shuffle" onClick={this.sortData.bind(this, 'shuffle')}/>
              <SortButton name="date" display="Date" onClick={this.sortData.bind(this, 'date')}/>
              <SortButton name="title" display="Title" onClick={this.sortData.bind(this, 'title')}/>
            </ul>
          </div>
        </aside>

        <main id="panel" className="content pure-g">
          <SlideToggle name="date" display="Date" onClick={this.slideToggle.bind(this)}/>

          <Gallery data={this.state.data} sortData={this.sortData}></Gallery>
        </main>
      </div>
    );
  }
});

module.exports = Home;