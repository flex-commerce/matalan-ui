'use strict';

var config      = require('../config');
if(!config.tasks.imageAssets) return;

var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var path        = require('path');

var paths = {
  src: path.join(config.app.src, config.tasks.imageAssets.src, '/**'),
  dest: path.join(config.app.dest, config.tasks.imageAssets.dest)
};

var imageAssetsTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('imageAssets', imageAssetsTask);
module.exports = imageAssetsTask;
