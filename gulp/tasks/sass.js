'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {

  return sass(config.src, config.settings)
    .pipe(sourcemaps.init())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

});
