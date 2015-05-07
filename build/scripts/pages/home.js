var DataService = require('../modules/data'),
    Header      = require('../components/header'),
    Gallery     = require('../components/gallery'),
    SlideToggle = require('../components/slideToggle'),
    Slideout    = require('slideout');

var SortButton = React.createClass({displayName: "SortButton",
  render: function () {
    return (
      React.createElement("li", null, 
        React.createElement("button", {"data-sort": this.props.name, onClick: this.props.onClick}, this.props.display)
      )
    )
  }
});

var Home = React.createClass({displayName: "Home",
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
      React.createElement("div", {class: "page-home"}, 
        React.createElement("aside", {id: "menu"}, 
          React.createElement(Header, null), 

          React.createElement("div", {className: "gallery__sort"}, 
            React.createElement("ul", null, 
              React.createElement(SortButton, {name: "shuffle", display: "Shuffle", onClick: this.sortData.bind(this, 'shuffle')}), 
              React.createElement(SortButton, {name: "date", display: "Date", onClick: this.sortData.bind(this, 'date')}), 
              React.createElement(SortButton, {name: "title", display: "Title", onClick: this.sortData.bind(this, 'title')})
            )
          )
        ), 

        React.createElement("main", {id: "panel", className: "content pure-g"}, 
          React.createElement(SlideToggle, {name: "date", display: "Date", onClick: this.slideToggle.bind(this)}), 

          React.createElement(Gallery, {data: this.state.data, sortData: this.sortData})
        )
      )
    );
  }
});

module.exports = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcbiAgICBIZWFkZXIgICAgICA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvaGVhZGVyJyksXG4gICAgR2FsbGVyeSAgICAgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2dhbGxlcnknKSxcbiAgICBTbGlkZVRvZ2dsZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvc2xpZGVUb2dnbGUnKSxcbiAgICBTbGlkZW91dCAgICA9IHJlcXVpcmUoJ3NsaWRlb3V0Jyk7XG5cbnZhciBTb3J0QnV0dG9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8YnV0dG9uIGRhdGEtc29ydD17dGhpcy5wcm9wcy5uYW1lfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9Pnt0aGlzLnByb3BzLmRpc3BsYXl9PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufSk7XG5cbnZhciBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBzbGlkZVRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2xpZGVvdXQudG9nZ2xlKCk7XG4gIH0sXG5cbiAgc29ydERhdGE6IGZ1bmN0aW9uIChzb3J0QnkpIHtcbiAgICB2YXIgc29ydGVkRGF0YTtcblxuICAgIHN3aXRjaCAoc29ydEJ5KSB7XG4gICAgICBjYXNlICdzaHVmZmxlJzpcbiAgICAgICAgc29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeVNodWZmbGUodGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgc29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeURhdGUodGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgIHNvcnRlZERhdGEgPSBEYXRhU2VydmljZS5zb3J0QnlUaXRsZSh0aGlzLnN0YXRlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNvcnRlZERhdGEgPSBEYXRhU2VydmljZS5zb3J0QnlTaHVmZmxlKHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHNvcnRlZERhdGF9KTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIERhdGFTZXJ2aWNlLnNldERhdGEoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBEYXRhU2VydmljZS5zb3J0QnlTaHVmZmxlKCl9KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnNsaWRlb3V0ID0gbmV3IFNsaWRlb3V0KHtcbiAgICAgICdwYW5lbCc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5lbCcpLFxuICAgICAgJ21lbnUnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLFxuICAgICAgJ3BhZGRpbmcnOiAyNTYsXG4gICAgICAndG9sZXJhbmNlJzogNzBcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhvbWVcIj5cbiAgICAgICAgPGFzaWRlIGlkPVwibWVudVwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9fc29ydFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8U29ydEJ1dHRvbiBuYW1lPVwic2h1ZmZsZVwiIGRpc3BsYXk9XCJTaHVmZmxlXCIgb25DbGljaz17dGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMsICdzaHVmZmxlJyl9Lz5cbiAgICAgICAgICAgICAgPFNvcnRCdXR0b24gbmFtZT1cImRhdGVcIiBkaXNwbGF5PVwiRGF0ZVwiIG9uQ2xpY2s9e3RoaXMuc29ydERhdGEuYmluZCh0aGlzLCAnZGF0ZScpfS8+XG4gICAgICAgICAgICAgIDxTb3J0QnV0dG9uIG5hbWU9XCJ0aXRsZVwiIGRpc3BsYXk9XCJUaXRsZVwiIG9uQ2xpY2s9e3RoaXMuc29ydERhdGEuYmluZCh0aGlzLCAndGl0bGUnKX0vPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICA8bWFpbiBpZD1cInBhbmVsXCIgY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cbiAgICAgICAgICA8U2xpZGVUb2dnbGUgbmFtZT1cImRhdGVcIiBkaXNwbGF5PVwiRGF0ZVwiIG9uQ2xpY2s9e3RoaXMuc2xpZGVUb2dnbGUuYmluZCh0aGlzKX0vPlxuXG4gICAgICAgICAgPEdhbGxlcnkgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSBzb3J0RGF0YT17dGhpcy5zb3J0RGF0YX0+PC9HYWxsZXJ5PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb21lOyJdLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9