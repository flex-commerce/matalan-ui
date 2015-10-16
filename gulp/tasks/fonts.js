'use strict';

var gulp         = require('gulp'),
    config       = require('../config').fonts,
    browserSync  = require('browser-sync');

gulp.task('fonts', function() {

  gulp
    .src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});

