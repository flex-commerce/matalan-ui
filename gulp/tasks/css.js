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
var duration     = require('gulp-duration');
var logger        = require('../util/compileLogger');
var pkg           = require('../../package.json');
var header        = require('gulp-header');
var scssLint      = require('gulp-scss-lint');
var stylish       = require('gulp-scss-lint-stylish2');

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
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
}

gulp.task('css', scssTask);
module.exports = scssTask;





// var scsslintTask = function () {
//   var reporter = stylish();
//   return gulp.src( path.join(config.app.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}') )
//   .pipe( scssLint({ customReport: reporter.issues, config: '.scsslint.yml' }) )
//   .on('error', handleErrors)
//   .pipe( reporter.printSummary );
// }

// gulp.task('css:lint', scsslintTask);
// module.exports = scsslintTask;