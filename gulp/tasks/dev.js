'use strict';

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../util/getEnabledTasks');

var devTask = function(cb) {
  var tasks = getEnabledTasks('watch');
  gulpSequence('watch', cb);
}

gulp.task('dev', devTask);
module.exports = devTask;
