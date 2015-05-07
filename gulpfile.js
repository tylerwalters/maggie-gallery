var gulp = require('gulp');

gulp.task('lint', function () {
  var jshint = require('gulp-jshint');

  return gulp.src(['api/**/*.js', 'public/js/**/*.js', '*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('stylus', function () {
  var stylus = require('gulp-stylus'),
      nib    = require('nib');

  return gulp.src('build/styles/stylus/main.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('jsx', function () {
  var react      = require('gulp-react'),
      sourcemaps = require('gulp-sourcemaps');

  return gulp.src('build/scripts/jsx/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(react({harmony: false}))
    .on('error', console.log.bind(console))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('browserify', function () {
  var browserify = require('browserify'),
      source     = require('vinyl-source-stream');

  return browserify('./build/scripts/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('css-min', function () {
  var minifycss = require('gulp-minify-css'),
      concat    = require('gulp-concat');

  return gulp.src('public/styles/main.css')
    .pipe(minifycss())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('js-min', function () {
  var uglify = require('gulp-uglify'),
      concat = require('gulp-concat');

  return gulp.src('public/scripts/main.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('watch', function () {
  gulp.watch('build/styles/stylus/**/*.styl', ['stylus']);
  gulp.watch('build/scripts/jsx/**/*.jsx', ['jsx']);
  gulp.watch('build/scripts/**/*.js', ['browserify']);
});

gulp.task('minify', ['css-min', 'js-min']);
gulp.task('build', ['lint', 'stylus', 'jsx', 'browserify', 'css-min', 'js-min']);