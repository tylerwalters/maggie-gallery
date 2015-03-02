var gulp = require('gulp');

gulp.task('lint', function () {
	var jshint = require('gulp-jshint');

	return gulp.src(['api/**/*.js', 'public/js/**/*.js', '*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('stylus', function () {
	var stylus 	= require('gulp-stylus'),
			nib			= require('nib');

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
	var react				= require('gulp-react'),
			concat			= require('gulp-concat'),
			sourcemaps	= require('gulp-sourcemaps');
	
	return gulp.src(['public/scripts/jsx/components/header.jsx', 'public/scripts/jsx/components/gallery.jsx', 'public/scripts/jsx/components/detail.jsx', 'public/scripts/jsx/components/footer.jsx', 'public/scripts/jsx/components/app.jsx', 'public/scripts/jsx/routes.jsx'])
		.pipe(sourcemaps.init())
		.pipe(react({harmony: false}))
		.pipe(concat('components.js'))
		.pipe(sourcemaps.write())
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

	return gulp.src('public/scripts/main.js')
		.pipe(browserified)
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('public/scripts'));
});

gulp.task('watch', function () {
	gulp.watch('public/styles/stylus/**/*.styl', ['stylus']);
	gulp.watch('public/scripts/jsx/**/*.jsx', ['jsx']);
	gulp.watch(['public/scripts/**/*.js', '!public/scripts/bundle.js'], ['browserify']);
});

gulp.task('default', ['lint', 'css-min', 'jsx', 'browserify']);