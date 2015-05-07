var Router          = require('react-router'),
    Footer          = require('./footer'),
    TransitionGroup = React.addons.CSSTransitionGroup;

var Index = React.createClass({
  render: function () {
    return (
      <div className="page" ref="page">
        <TransitionGroup component="div" transitionName="example">
          <Router.RouteHandler {...this.props}/>
        </TransitionGroup>
      </div>
    );
  }
});

module.exports = Index;