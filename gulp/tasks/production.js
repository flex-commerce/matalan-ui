// todo - extend this for gh-pages and s3 deploy

var config       = require('../config');
var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');
var getEnabledTasks = require('../util/getEnabledTasks');

var productionTask = function(cb) {

  process.env.NODE_ENV = 'production';

  var tasks = getEnabledTasks('production');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'modernizr', cb); // 'rev',
};

gulp.task('production', productionTask);
module.exports = productionTask;
