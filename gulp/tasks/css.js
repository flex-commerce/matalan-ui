'use strict';

var config       = require('../config');
if(!config.tasks.css) return;

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var path         = require('path');
var logger        = require('../util/compileLogger');
var pkg           = require('../../package.json');
var minifyCSS     = require('gulp-minify-css');
var header        = require('gulp-header');
// var scssLint      = require('gulp-scss-lint');
// var stylish       = require('gulp-scss-lint-stylish2');

var paths = {
  src: path.join(config.app.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.app.dest, config.tasks.css.dest)
};

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @license <%= pkg.license %>',
  ' * Compiled <%= new Date().toUTCString() %>',
  ' */',
  ''
].join('\n');

var scssTask = function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(minifyCSS({
      keepSpecialComments: "*",
      roundingPrecision: -1,
      restructuring: false,
      mediaMerging: false,
      keepBreaks: true,
      advanced: false
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
}

gulp.task('css', scssTask);
module.exports = scssTask;




