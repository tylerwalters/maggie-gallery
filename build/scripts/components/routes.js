var Router       = require('react-router'),
    Index        = require('./index'),
    Home         = require('../pages/home'),
    Detail       = require('../pages/detail'),
    About        = require('../pages/about'),
    Donate       = require('../pages/donate'),
    DefaultRoute = Router.DefaultRoute,
    Route        = Router.Route,
    routes;

routes = (
  React.createElement(Route, {name: "index", path: "/", handler: Index}, 
    React.createElement(Route, {name: "detail", handler: Detail}, 
      React.createElement(Route, {name: "detailItem", path: ":mediaId", handler: Detail})
    ), 
    React.createElement(Route, {name: "about", handler: About}), 
    React.createElement(Route, {name: "donate", handler: Donate}), 
    React.createElement(Router.DefaultRoute, {handler: Home})
  )
)

module.exports = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3JvdXRlcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciAgICAgICA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuICAgIEluZGV4ICAgICAgICA9IHJlcXVpcmUoJy4vaW5kZXgnKSxcbiAgICBIb21lICAgICAgICAgPSByZXF1aXJlKCcuLi9wYWdlcy9ob21lJyksXG4gICAgRGV0YWlsICAgICAgID0gcmVxdWlyZSgnLi4vcGFnZXMvZGV0YWlsJyksXG4gICAgQWJvdXQgICAgICAgID0gcmVxdWlyZSgnLi4vcGFnZXMvYWJvdXQnKSxcbiAgICBEb25hdGUgICAgICAgPSByZXF1aXJlKCcuLi9wYWdlcy9kb25hdGUnKSxcbiAgICBEZWZhdWx0Um91dGUgPSBSb3V0ZXIuRGVmYXVsdFJvdXRlLFxuICAgIFJvdXRlICAgICAgICA9IFJvdXRlci5Sb3V0ZSxcbiAgICByb3V0ZXM7XG5cbnJvdXRlcyA9IChcbiAgPFJvdXRlIG5hbWU9XCJpbmRleFwiIHBhdGg9XCIvXCIgaGFuZGxlcj17SW5kZXh9PlxuICAgIDxSb3V0ZSBuYW1lPVwiZGV0YWlsXCIgaGFuZGxlcj17RGV0YWlsfT5cbiAgICAgIDxSb3V0ZSBuYW1lPVwiZGV0YWlsSXRlbVwiIHBhdGg9XCI6bWVkaWFJZFwiIGhhbmRsZXI9e0RldGFpbH0vPlxuICAgIDwvUm91dGU+XG4gICAgPFJvdXRlIG5hbWU9XCJhYm91dFwiIGhhbmRsZXI9e0Fib3V0fS8+XG4gICAgPFJvdXRlIG5hbWU9XCJkb25hdGVcIiBoYW5kbGVyPXtEb25hdGV9Lz5cbiAgICA8Um91dGVyLkRlZmF1bHRSb3V0ZSBoYW5kbGVyPXtIb21lfS8+XG4gIDwvUm91dGU+XG4pXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyJdLCJmaWxlIjoiY29tcG9uZW50cy9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==