'use strict';

var gulp         = require('gulp'),
    config       = require('../config').js,
    browserSync  = require('browser-sync');

gulp.task('js', function() {

  gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});

