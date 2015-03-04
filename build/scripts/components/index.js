var Router = require('react-router'),
		Header = require('./header'),
		Footer = require('./footer');

var Index = React.createClass({displayName: "Index",
	render: function () {
		return (
			React.createElement("div", {class: "page"}, 
				React.createElement(Header, null), 
				React.createElement(Router.RouteHandler, React.__spread({},  this.props)), 
				React.createElement(Footer, null)
			)
		);
	}
});

module.exports = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyksXG5cdFx0SGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXInKSxcblx0XHRGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpO1xuXG52YXIgSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFnZVwiPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxSb3V0ZXIuUm91dGVIYW5kbGVyIHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGV4OyJdLCJmaWxlIjoiY29tcG9uZW50cy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9