var SlideToggle = React.createClass({
  render: function () {
    return (
      <nav class="slide-toggle">
        <button onClick={this.props.onClick}>☰</button>
      </nav>
    )
  }
});

module.exports = SlideToggle;