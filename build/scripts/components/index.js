var Router          = require('react-router'),
    Footer          = require('./footer'),
    TransitionGroup = React.addons.CSSTransitionGroup;

var Index = React.createClass({displayName: "Index",
  render: function () {
    return (
      React.createElement("div", {className: "page", ref: "page"}, 
        React.createElement(TransitionGroup, {component: "div", transitionName: "example"}, 
          React.createElement(Router.RouteHandler, React.__spread({},  this.props))
        )
      )
    );
  }
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyICAgICAgICAgID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG4gICAgRm9vdGVyICAgICAgICAgID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICBUcmFuc2l0aW9uR3JvdXAgPSBSZWFjdC5hZGRvbnMuQ1NTVHJhbnNpdGlvbkdyb3VwO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiByZWY9XCJwYWdlXCI+XG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PVwiZGl2XCIgdHJhbnNpdGlvbk5hbWU9XCJleGFtcGxlXCI+XG4gICAgICAgICAgPFJvdXRlci5Sb3V0ZUhhbmRsZXIgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmRleDsiXSwiZmlsZSI6ImNvbXBvbmVudHMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==