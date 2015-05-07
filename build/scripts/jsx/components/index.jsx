var Router          = require('react-router'),
    Header          = require('./header'),
    Footer          = require('./footer'),
    TransitionGroup = React.addons.CSSTransitionGroup;

var Index = React.createClass({
  render: function () {
    return (
      <div className="page" ref="page">
        <Header />
        <TransitionGroup component="main" transitionName="example">
          <Router.RouteHandler {...this.props}/>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
});

module.exports = Index;