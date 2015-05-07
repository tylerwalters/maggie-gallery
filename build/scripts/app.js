var Router = require('react-router'),
    Routes = require('./components/routes');


Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
  var params = state.params;
  React.render(React.createElement(Handler, {params: params}), document.body);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKSxcbiAgICBSb3V0ZXMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcm91dGVzJyk7XG5cblxuUm91dGVyLnJ1bihSb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIGZ1bmN0aW9uIChIYW5kbGVyLCBzdGF0ZSkge1xuICB2YXIgcGFyYW1zID0gc3RhdGUucGFyYW1zO1xuICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIgcGFyYW1zPXtwYXJhbXN9Lz4sIGRvY3VtZW50LmJvZHkpO1xufSk7Il0sImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==