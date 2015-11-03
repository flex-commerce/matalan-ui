'use strict';

var gulp         = require('gulp'),
    config       = require('../config').img,
    browserSync  = require('browser-sync');

gulp.task('images', function() {

  gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});

