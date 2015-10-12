'use strict';

var gulp         = require('gulp'),
    config       = require('../config').markup,
    browserSync  = require('browser-sync');

gulp.task('markup', function() {

  return gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});

