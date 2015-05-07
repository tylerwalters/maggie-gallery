var Logo = React.createClass({displayName: "Logo",
  render: function () {
    return (
      React.createElement("div", {className: "header__logo pure-u-1-4"}, 
        React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo"})
      )
    )
  }
});

var Navigation = React.createClass({displayName: "Navigation",
  render: function () {
    return (
      React.createElement("nav", {className: "header__nav pure-u-3-4"}, 
        React.createElement("ul", null, 
          React.createElement("li", null, React.createElement("a", {href: "/"}, "Home")), 
          React.createElement("li", null, React.createElement("a", {href: "/about"}, "About")), 
          React.createElement("li", null, React.createElement("a", {href: "/donate"}, "Donate"))
        )
      )
    )
  }
});

var Header = React.createClass({displayName: "Header",
  render: function () {
    return (
      React.createElement("header", {className: "header pure-g"}, 
        React.createElement(Logo, null), 
        React.createElement(Navigation, null)
      )
    );
  }
});

module.exports = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2hlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIExvZ28gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nbyBwdXJlLXUtMS00XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTWFnZ2llIFdhbHRlcnMgTWVkaWEgR2FsbGVyeSBMb2dvXCIvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxudmFyIE5hdmlnYXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlcl9fbmF2IHB1cmUtdS0zLTRcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9uYXRlXCI+RG9uYXRlPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgcHVyZS1nXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7Il0sImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9