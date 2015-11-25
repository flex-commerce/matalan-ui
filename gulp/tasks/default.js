'use strict';

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../util/getEnabledTasks');

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'watch', cb);
  // gulpSequence('clean', tasks.codeTasks, 'watch', cb);
  //
}

gulp.task('default', defaultTask);
module.exports = defaultTask;



// var gulp = require('gulp');

// gulp.task('default', [
//   'clean',
//   'sass',
//   'markup',
//   'js',
//   'fonts',
//   'images',
//   'watch',
//   'browserSync'
//   ]);
