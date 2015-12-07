'use strict';

var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');

var demoTask = function(cb) {
  gulpSequence('production', 'server', cb);
}

gulp.task('demo', demoTask);
module.exports = demoTask;
