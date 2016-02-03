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
    errorsOnly: false
});

// var scssToCheck = path.join(
//     config.app.src,
//     config.tasks.css.src,
//     '/40-elements/*' + '.{' + config.tasks.css.extensions + '}'
// );

// var scsslintTask = function() {
//     return gulp.src(scssToCheck)
//         // .pipe(cache('scsslint'))
//         .pipe(scssLint({
//             customReport: reporter.issues,
//             // 'filePipeOutput': 'scssReport.json',
//             config: '.scss-lint.yml',
//             endless: true,
//             sync: true,
//             maxBuffer: 600 * 1024
//         }));
//     // .pipe( reporter.printSummary );
// }

gulp.task('csslint', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(scssLint({
            customReport: reporter.issues,
            config: '.scss-lint.yml',
            maxBuffer: 600 * 1024
        }))
        .pipe(scssLint.failReporter('E'));
});

// gulp.task('sass', ['scss-lint'], function() {
//     return gulp.src('**/*.scss')
//         .pipe(scss());
// });


// gulp.task('csslint', scsslintTask);
// module.exports = scsslintTask;
