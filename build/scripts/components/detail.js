var DetailImage = React.createClass({displayName: "DetailImage",
	render: function () {
		return (
			React.createElement("div", {className: "header__logo pure-u-1-4"}, 
				React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo", className: "header__logo"})
			)
		);
	}
});

var DetailDescription = React.createClass({displayName: "DetailDescription",
	render: function () {
		return (
			React.createElement("div", {className: "header__logo pure-u-1-4"}, 
				React.createElement("img", {src: "../images/logo.png", alt: "Maggie Walters Media Gallery Logo", className: "header__logo"})
			)
		);
	}
});

var Detail = React.createClass({displayName: "Detail",
	render: function (data) {
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement(DetailImage, {src: ""}), 
				React.createElement(DetailDescription, null)
			)
		);
	}
});

module.exports = Detail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RldGFpbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIERldGFpbEltYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbERlc2NyaXB0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ28gcHVyZS11LTEtNFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIk1hZ2dpZSBXYWx0ZXJzIE1lZGlhIEdhbGxlcnkgTG9nb1wiIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxudmFyIERldGFpbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50IHB1cmUtZ1wiPlxuXHRcdFx0XHQ8RGV0YWlsSW1hZ2Ugc3JjPVwiXCI+PC9EZXRhaWxJbWFnZT5cblx0XHRcdFx0PERldGFpbERlc2NyaXB0aW9uPjwvRGV0YWlsRGVzY3JpcHRpb24+XG5cdFx0XHQ8L21haW4+XG5cdFx0KTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsOyJdLCJmaWxlIjoiY29tcG9uZW50cy9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==