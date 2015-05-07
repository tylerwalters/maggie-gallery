var Router          = require('react-router'),
    Header          = require('./header'),
    Footer          = require('./footer'),
    TransitionGroup = React.addons.CSSTransitionGroup;

var Index = React.createClass({displayName: "Index",
  render: function () {
    return (
      React.createElement("div", {className: "page", ref: "page"}, 
        React.createElement(Header, null), 
        React.createElement(TransitionGroup, {component: "main", transitionName: "example"}, 
          React.createElement(Router.RouteHandler, React.__spread({},  this.props))
        ), 
        React.createElement(Footer, null)
      )
    );
  }
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyICAgICAgICAgID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG4gICAgSGVhZGVyICAgICAgICAgID0gcmVxdWlyZSgnLi9oZWFkZXInKSxcbiAgICBGb290ZXIgICAgICAgICAgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgIFRyYW5zaXRpb25Hcm91cCA9IFJlYWN0LmFkZG9ucy5DU1NUcmFuc2l0aW9uR3JvdXA7XG5cbnZhciBJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiIHJlZj1cInBhZ2VcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD1cIm1haW5cIiB0cmFuc2l0aW9uTmFtZT1cImV4YW1wbGVcIj5cbiAgICAgICAgICA8Um91dGVyLlJvdXRlSGFuZGxlciB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5kZXg7Il0sImZpbGUiOiJjb21wb25lbnRzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=