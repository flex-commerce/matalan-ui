'use strict';

// var gulp         = require('gulp'),
//     config       = require('../config').img,
//     browserSync  = require('browser-sync');

// gulp.task('data', function() {

//   gulp
//     .src(config.src)
//     .pipe(gulp.dest(config.dest))
//     .pipe(browserSync.reload({stream:true}));

// });

// todo - check this doesnt break svg

var config      = require('../config');
if(!config.tasks.data) return;

var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var path        = require('path');

var paths = {
  src: path.join(config.app.src, config.tasks.data.src, '/**'),
  dest: path.join(config.app.dest, config.tasks.data.dest)
};

var dataTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('data', dataTask);
module.exports = dataTask;
