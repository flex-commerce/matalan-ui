'use strict';

var config       = require('../config');
if(!config.tasks.css) return;

var gulp         = require('gulp');
var path         = require('path');
var handleErrors = require('../util/handleErrors');
var scssLint      = require('gulp-scss-lint');
var stylish       = require('gulp-scss-lint-stylish2');


var reporter = stylish();


var scssToCheck = path.join(
  config.app.src,
  config.tasks.css.src,
 '/**/*' + '.{' + config.tasks.css.extensions + '}'
 );



var scsslintTask = function() {
  return gulp.src( scssToCheck )
  .pipe( scssLint({
    customReport: reporter.issues,
    config: '.scsslint.yml'
 }) )
  .pipe( reporter.printSummary );
}

gulp.task('csslint', scsslintTask);
module.exports = scsslintTask;