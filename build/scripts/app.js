var Router 	= require('react-router'),
		Routes = require('./components/routes');


Router.run(Routes, Router.HistoryLocation, function (Handler, state) {
	var params = state.params;
	React.render(React.createElement(Handler, {params: params}), document.body);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgXHQ9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLFxuXHRcdFJvdXRlcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yb3V0ZXMnKTtcblxuXG5Sb3V0ZXIucnVuKFJvdXRlcywgUm91dGVyLkhpc3RvcnlMb2NhdGlvbiwgZnVuY3Rpb24gKEhhbmRsZXIsIHN0YXRlKSB7XG5cdHZhciBwYXJhbXMgPSBzdGF0ZS5wYXJhbXM7XG5cdFJlYWN0LnJlbmRlcig8SGFuZGxlciBwYXJhbXM9e3BhcmFtc30gLz4sIGRvY3VtZW50LmJvZHkpO1xufSk7Il0sImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==