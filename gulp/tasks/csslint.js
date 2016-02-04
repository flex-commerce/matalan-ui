// 'use strict';

// var config = require('../config');
// if (!config.tasks.css) return;

// var gulp     = require('gulp');
// var sass     = require('gulp-sass');
// var scsslint = require('gulp-scss-lint');
// var stylish  = require('gulp-scss-lint-stylish2');
// var cache    = require('gulp-cached');
// var path     = require('path');


// var reporter = stylish({
//   errorsOnly: false
// });

// var scssToCheck = path.join(
//   config.app.src,
//   config.tasks.css.src,
//   '**/*' + '.{' + config.tasks.css.extensions + '}'
// );


//   var scssLintTask = function() {
//   console.log('');
//   console.log('==================================================');
//   console.log('');

//   return gulp.src('./src/scss/**/*.scss')
//   .pipe(cache('scsslint'))
//   .pipe(scsslint({
//     customReport: reporter.issues,
//     config: '.scss-lint.yml',
//     sync: true,
//     maxBuffer: 600 * 1024
//   }))
//   // .pipe(scsslint.failReporter('E'));
// };

// // gulp.task('csslint', scssLintTask);

// gulp.task('csslint', function() {
//   gulp.watch(scssToCheck, scssLintTask);
// });

// module.exports = scssLintTask;
