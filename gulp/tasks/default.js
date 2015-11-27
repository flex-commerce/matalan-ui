'use strict';

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../util/getEnabledTasks');

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'modernizr', 'watch', cb);
}

gulp.task('default', defaultTask);
module.exports = defaultTask;
