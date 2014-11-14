var gulp 					= require('gulp'),
		jshint 				= require('gulp-jshint'),
		autoprefix 		= require('gulp-autoprefixer'),
		minifycss 		= require('gulp-minify-css'),
		uglify 				= require('gulp-uglify'),
		imagemin 			= require('gulp-imagemin'),
		concat 				= require('gulp-concat'),
		stylus 				= require('gulp-stylus'),
		nib 					= require('nib');

gulp.task('lint', function() {
  return gulp.src(['api/**/*.js', 'public/js/**/*.js', '*.js'])
  	.pipe(jshint())
  	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('stylus', function() {
	return gulp.src('public/styles/stylus/*.styl')
		.pipe(stylus({use: [nib()]}))
		.pipe(gulp.dest('./public/styles/main.css'));
});



gulp.task('default', ['lint', 'stylus']);