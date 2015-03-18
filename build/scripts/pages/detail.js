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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYWdlcy9kZXRhaWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBEZXRhaWxJbWFnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWxEZXNjcmlwdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvIHB1cmUtdS0xLTRcIj5cblx0XHRcdFx0PGltZyBzcmM9XCIuLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJNYWdnaWUgV2FsdGVycyBNZWRpYSBHYWxsZXJ5IExvZ29cIiBjbGFzc05hbWU9XCJoZWFkZXJfX2xvZ29cIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBEZXRhaWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwiY29udGVudCBwdXJlLWdcIj5cblx0XHRcdFx0PERldGFpbEltYWdlIHNyYz1cIlwiPjwvRGV0YWlsSW1hZ2U+XG5cdFx0XHRcdDxEZXRhaWxEZXNjcmlwdGlvbj48L0RldGFpbERlc2NyaXB0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGFpbDsiXSwiZmlsZSI6InBhZ2VzL2RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9