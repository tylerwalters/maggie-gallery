// var data = {
// 	photos: [
// 		{
// 			filename: '2012-07-31_13-18-45_503',
// 			extension: 'jpg',
// 			title: '2012-07-31_13-18-45_503',
// 			layout: 'landscape'
// 		},
// 		{
// 			filename: 'grandparents-day',
// 			extension: 'jpg',
// 			title: 'grandparents-day',
// 			layout: 'landscape'
// 		},
// 		{
// 			filename: 'IMAG0712',
// 			extension: 'jpg',
// 			title: 'IMAG0712',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0717',
// 			extension: 'jpg',
// 			title: 'IMAG0717',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0720',
// 			extension: 'jpg',
// 			title: 'IMAG0720',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0736',
// 			extension: 'jpg',
// 			title: 'IMAG0736',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0745',
// 			extension: 'jpg',
// 			title: 'IMAG0745',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0751',
// 			extension: 'jpg',
// 			title: 'IMAG0751',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0769',
// 			extension: 'jpg',
// 			title: 'IMAG0769',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0770',
// 			extension: 'jpg',
// 			title: 'IMAG0770',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0771',
// 			extension: 'jpg',
// 			title: 'IMAG0771',
// 			layout: 'portrait'
// 		},
// 		{
// 			filename: 'IMAG0790',
// 			extension: 'jpg',
// 			title: 'IMAG0790',
// 			layout: 'landscape'
// 		},
// 		{
// 			filename: 'mom-maggie-and-marie',
// 			extension: 'jpg',
// 			title: 'mom-maggie-and-marie',
// 			layout: 'landscape'
// 		},
// 	]
// }

var DataService = require('../modules/data'),
		data;

DataService.initialize();
data = DataService.getPhotos();

var GalleryImage = React.createClass({displayName: "GalleryImage",
	render: function () {
		return (
			React.createElement("div", {className: this.props.className}, 
				React.createElement("a", {href: this.props.page}, React.createElement("img", {src: this.props.src, alt: this.props.title}))
			)
		)
	}
});

var Gallery = React.createClass({displayName: "Gallery",
	render: function () {
		var imageNodes = data.map(function (image) {
			var preparedData = {
				className: 'gallery__image gallery__image--' + image.layout,
				page: '/detail/' + image.title,
				src: '../images/' + image.filename + '.desk.' + image.extension
			}
			
			return (
				React.createElement(GalleryImage, {className: preparedData.className, page: preparedData.page, src: preparedData.src, title: image.title})
			)
		})
		return (
			React.createElement("main", {className: "content pure-g"}, 
				React.createElement("div", {id: "gallery", className: "pure-u-1 gallery isotope"}, 
					imageNodes
				)
			)
		);
	}
});

module.exports = Gallery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL2dhbGxlcnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBkYXRhID0ge1xuLy8gXHRwaG90b3M6IFtcbi8vIFx0XHR7XG4vLyBcdFx0XHRmaWxlbmFtZTogJzIwMTItMDctMzFfMTMtMTgtNDVfNTAzJyxcbi8vIFx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG4vLyBcdFx0XHR0aXRsZTogJzIwMTItMDctMzFfMTMtMTgtNDVfNTAzJyxcbi8vIFx0XHRcdGxheW91dDogJ2xhbmRzY2FwZSdcbi8vIFx0XHR9LFxuLy8gXHRcdHtcbi8vIFx0XHRcdGZpbGVuYW1lOiAnZ3JhbmRwYXJlbnRzLWRheScsXG4vLyBcdFx0XHRleHRlbnNpb246ICdqcGcnLFxuLy8gXHRcdFx0dGl0bGU6ICdncmFuZHBhcmVudHMtZGF5Jyxcbi8vIFx0XHRcdGxheW91dDogJ2xhbmRzY2FwZSdcbi8vIFx0XHR9LFxuLy8gXHRcdHtcbi8vIFx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MTInLFxuLy8gXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcbi8vIFx0XHRcdHRpdGxlOiAnSU1BRzA3MTInLFxuLy8gXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG4vLyBcdFx0fSxcbi8vIFx0XHR7XG4vLyBcdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzE3Jyxcbi8vIFx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG4vLyBcdFx0XHR0aXRsZTogJ0lNQUcwNzE3Jyxcbi8vIFx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuLy8gXHRcdH0sXG4vLyBcdFx0e1xuLy8gXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDcyMCcsXG4vLyBcdFx0XHRleHRlbnNpb246ICdqcGcnLFxuLy8gXHRcdFx0dGl0bGU6ICdJTUFHMDcyMCcsXG4vLyBcdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcbi8vIFx0XHR9LFxuLy8gXHRcdHtcbi8vIFx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3MzYnLFxuLy8gXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcbi8vIFx0XHRcdHRpdGxlOiAnSU1BRzA3MzYnLFxuLy8gXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG4vLyBcdFx0fSxcbi8vIFx0XHR7XG4vLyBcdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzQ1Jyxcbi8vIFx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG4vLyBcdFx0XHR0aXRsZTogJ0lNQUcwNzQ1Jyxcbi8vIFx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuLy8gXHRcdH0sXG4vLyBcdFx0e1xuLy8gXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDc1MScsXG4vLyBcdFx0XHRleHRlbnNpb246ICdqcGcnLFxuLy8gXHRcdFx0dGl0bGU6ICdJTUFHMDc1MScsXG4vLyBcdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcbi8vIFx0XHR9LFxuLy8gXHRcdHtcbi8vIFx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3NjknLFxuLy8gXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcbi8vIFx0XHRcdHRpdGxlOiAnSU1BRzA3NjknLFxuLy8gXHRcdFx0bGF5b3V0OiAncG9ydHJhaXQnXG4vLyBcdFx0fSxcbi8vIFx0XHR7XG4vLyBcdFx0XHRmaWxlbmFtZTogJ0lNQUcwNzcwJyxcbi8vIFx0XHRcdGV4dGVuc2lvbjogJ2pwZycsXG4vLyBcdFx0XHR0aXRsZTogJ0lNQUcwNzcwJyxcbi8vIFx0XHRcdGxheW91dDogJ3BvcnRyYWl0J1xuLy8gXHRcdH0sXG4vLyBcdFx0e1xuLy8gXHRcdFx0ZmlsZW5hbWU6ICdJTUFHMDc3MScsXG4vLyBcdFx0XHRleHRlbnNpb246ICdqcGcnLFxuLy8gXHRcdFx0dGl0bGU6ICdJTUFHMDc3MScsXG4vLyBcdFx0XHRsYXlvdXQ6ICdwb3J0cmFpdCdcbi8vIFx0XHR9LFxuLy8gXHRcdHtcbi8vIFx0XHRcdGZpbGVuYW1lOiAnSU1BRzA3OTAnLFxuLy8gXHRcdFx0ZXh0ZW5zaW9uOiAnanBnJyxcbi8vIFx0XHRcdHRpdGxlOiAnSU1BRzA3OTAnLFxuLy8gXHRcdFx0bGF5b3V0OiAnbGFuZHNjYXBlJ1xuLy8gXHRcdH0sXG4vLyBcdFx0e1xuLy8gXHRcdFx0ZmlsZW5hbWU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG4vLyBcdFx0XHRleHRlbnNpb246ICdqcGcnLFxuLy8gXHRcdFx0dGl0bGU6ICdtb20tbWFnZ2llLWFuZC1tYXJpZScsXG4vLyBcdFx0XHRsYXlvdXQ6ICdsYW5kc2NhcGUnXG4vLyBcdFx0fSxcbi8vIFx0XVxuLy8gfVxuXG52YXIgRGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2RhdGEnKSxcblx0XHRkYXRhO1xuXG5EYXRhU2VydmljZS5pbml0aWFsaXplKCk7XG5kYXRhID0gRGF0YVNlcnZpY2UuZ2V0UGhvdG9zKCk7XG5cbnZhciBHYWxsZXJ5SW1hZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHQ8YSBocmVmPXt0aGlzLnByb3BzLnBhZ2V9PjxpbWcgc3JjPXt0aGlzLnByb3BzLnNyY30gYWx0PXt0aGlzLnByb3BzLnRpdGxlfSAvPjwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cbnZhciBHYWxsZXJ5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW1hZ2VOb2RlcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuXHRcdFx0dmFyIHByZXBhcmVkRGF0YSA9IHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZ2FsbGVyeV9faW1hZ2UgZ2FsbGVyeV9faW1hZ2UtLScgKyBpbWFnZS5sYXlvdXQsXG5cdFx0XHRcdHBhZ2U6ICcvZGV0YWlsLycgKyBpbWFnZS50aXRsZSxcblx0XHRcdFx0c3JjOiAnLi4vaW1hZ2VzLycgKyBpbWFnZS5maWxlbmFtZSArICcuZGVzay4nICsgaW1hZ2UuZXh0ZW5zaW9uXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxHYWxsZXJ5SW1hZ2UgY2xhc3NOYW1lPXtwcmVwYXJlZERhdGEuY2xhc3NOYW1lfSBwYWdlPXtwcmVwYXJlZERhdGEucGFnZX0gc3JjPXtwcmVwYXJlZERhdGEuc3JjfSB0aXRsZT17aW1hZ2UudGl0bGV9PjwvR2FsbGVyeUltYWdlPlxuXHRcdFx0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQgcHVyZS1nXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJnYWxsZXJ5XCIgY2xhc3NOYW1lPVwicHVyZS11LTEgZ2FsbGVyeSBpc290b3BlXCI+XG5cdFx0XHRcdFx0e2ltYWdlTm9kZXN9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbGxlcnk7Il0sImZpbGUiOiJjb21wb25lbnRzL2dhbGxlcnkuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==