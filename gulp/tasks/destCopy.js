'use strict';

var config      = require('../config');
if(!config.tasks.destCopy) return;

var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var path        = require('path');

var paths = {
  src: path.join(config.app.src, config.tasks.destCopy.src, '/**'),
  dest: path.join(config.app.dest, config.tasks.destCopy.dest)
};

var destCopyTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('destCopy', destCopyTask);
module.exports = destCopyTask;
