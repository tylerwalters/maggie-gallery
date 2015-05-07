var SlideToggle = React.createClass({displayName: "SlideToggle",
  render: function () {
    return (
      React.createElement("nav", {class: "slide-toggle"}, 
        React.createElement("button", {onClick: this.props.onClick}, "☰")
      )
    )
  }
});

module.exports = SlideToggle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NsaWRlVG9nZ2xlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2xpZGVUb2dnbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzPVwic2xpZGUtdG9nZ2xlXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT7imLA8L2J1dHRvbj5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVUb2dnbGU7Il0sImZpbGUiOiJjb21wb25lbnRzL3NsaWRlVG9nZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=