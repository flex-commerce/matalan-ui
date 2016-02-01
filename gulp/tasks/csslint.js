'use strict';
/**
 * Lint SCSS files
 * `gem install scss-lint` needed
 */

var config = require('../config');
if (!config.tasks.css) return;

var gulp = require('gulp');
var path = require('path');
var handleErrors = require('../util/handleErrors');
var scssLint = require('gulp-scss-lint');
var stylish = require('gulp-scss-lint-stylish2');
var handleErrors = require('../util/handleErrors');
var cache = require('gulp-cached');

var reporter = stylish({
    errorsOnly: true
});

var scssToCheck = path.join(
    config.app.src,
    config.tasks.css.src,
    '/**/*' + '.{' + config.tasks.css.extensions + '}'
);

var scsslintTask = function() {
    return gulp.src(scssToCheck)
        .pipe(cache('scsslint'))
        .pipe(scssLint({
            // customReport: reporter.issues,
            config: '.scss-lint.yml',
            verbose: true,
            maxBuffer: 600 * 1024
        }))
    .pipe( reporter.printSummary )
    .on('error', handleErrors);
}

gulp.task('csslint', scsslintTask);
module.exports = scsslintTask;
