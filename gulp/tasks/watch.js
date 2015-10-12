'use strict';

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['browserSync'], function(callback) {
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.markup.src, ['markup']);
});
