'use strict';

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../util/getEnabledTasks');

var devTask = function(cb) {
  process.env.NODE_ENV = 'dev';
  var tasks = getEnabledTasks('watch');

  gulpSequence(tasks.codeTasks, 'modernizr', 'watch', cb);
}

gulp.task('dev', devTask);
module.exports = devTask;


