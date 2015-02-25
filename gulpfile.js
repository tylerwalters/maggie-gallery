console.time('Loading plugins');

var gulp = require('gulp');

gulp.task('lint', function () {
	var jshint = require('gulp-jshint');

	return gulp.src(['api/**/*.js', 'public/js/**/*.js', '*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('stylus', function () {
	var stylus 	= require('gulp-stylus'),
		nib				= require('nib');

	return gulp.src('public/styles/stylus/main.styl')
		.pipe(stylus({use: [nib()]}))
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('css-min', function () {
	var stylus 		= require('gulp-stylus'),
			nib				= require('nib'),
			minifycss = require('gulp-minify-css');

	return gulp.src('public/styles/stylus/main.styl')
		.pipe(stylus({use: [nib()]}))
		.pipe(minifycss())
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('jsx', function () {
	var react = require('gulp-react');
	
	return gulp.src('public/scripts/jsx/**/*.jsx')
		.pipe(react({harmony: false}))
		.pipe(gulp.dest('./public/scripts'));
});

gulp.task('browserify', function () {
	var browserify		= require('browserify'),
			transform			= require('vinyl-transform'),
			concat				= require('gulp-concat'),
			browserified;

	browserified = transform(function (filename) {
		var b = browserify(filename);

		return b.bundle();
	});

	return gulp.src('public/scripts/**/*.js')
		.pipe(browserified)
		.pipe(gulp.dest('public/scripts/output/bundle.js'));
});

gulp.task('default', ['lint', 'css-min', 'jsx', 'browserify']);

console.timeEnd('Loading plugins');