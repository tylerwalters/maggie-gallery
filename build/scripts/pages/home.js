var DataService = require('../modules/data'),
    Gallery     = require('../components/gallery');

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
      .then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9ob21lLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcbiAgICBHYWxsZXJ5ICAgICA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvZ2FsbGVyeScpO1xuXG52YXIgSG9tZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgc29ydERhdGE6IGZ1bmN0aW9uIChzb3J0QnkpIHtcbiAgICB2YXIgc29ydGVkRGF0YTtcblxuICAgIHN3aXRjaCAoc29ydEJ5KSB7XG4gICAgICBjYXNlICdzaHVmZmxlJzpcbiAgICAgICAgc29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeVNodWZmbGUodGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgc29ydGVkRGF0YSA9IERhdGFTZXJ2aWNlLnNvcnRCeURhdGUodGhpcy5zdGF0ZS5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgIHNvcnRlZERhdGEgPSBEYXRhU2VydmljZS5zb3J0QnlUaXRsZSh0aGlzLnN0YXRlLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNvcnRlZERhdGEgPSBEYXRhU2VydmljZS5zb3J0QnlTaHVmZmxlKHRoaXMuc3RhdGUuZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHNvcnRlZERhdGF9KTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge2RhdGE6IFtdfTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIERhdGFTZXJ2aWNlLnNldERhdGEoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBEYXRhU2VydmljZS5zb3J0QnlTaHVmZmxlKCl9KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuICAgICAgICA8R2FsbGVyeSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHNvcnREYXRhPXt0aGlzLnNvcnREYXRhfT48L0dhbGxlcnk+XG4gICAgICA8L21haW4+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZTsiXSwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==