var gulp = require('gulp');
var config = require('../config').production;
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var pkg = require('../../package.json');
var header = require('gulp-header');

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * Compiled <%= new Date().toUTCString() %>',
  ' */',
  ''
].join('\n');

gulp.task('minifyCss', ['sass'], function() {

  return gulp.src(config.cssSrc)
    .pipe(sourcemaps.init())
    .pipe(minifyCSS({
      keepSpecialComments: "*",
      roundingPrecision: -1,
      restructuring: false,
      mediaMerging: false,
      keepBreaks: true,
      advanced: false
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('dist/css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));

})






