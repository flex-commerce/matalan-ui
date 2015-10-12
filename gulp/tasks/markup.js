'use strict';

var gulp         = require('gulp'),
    config       = require('../config').markup,
    browserSync  = require('browser-sync'),
    prettify     = require('gulp-jsbeautifier');

gulp.task('markup', function() {

  return gulp
    .src(config.src)
    .pipe(prettify({config: '.jsbeautifyrc'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});

