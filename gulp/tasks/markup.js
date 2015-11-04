/*jslint node: true */
'use strict';

var gulp         = require('gulp'),
    config       = require('../config').markup,
    foreach      = require('gulp-foreach'),
    hb           = require('gulp-hb'),
    path         = require('path'),
    prettify     = require('gulp-jsbeautifier'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors'),
    browserSync  = require('browser-sync');



gulp.task('markup', function () {
    return gulp
        .src('./src/htdocs/*.html')
        .pipe(hb({
            helpers: config.hbHelpers,
            partials: './src/htdocs/{,**/}*.hbs',
            bustCache: true
        }))
        .on('error', handleErrors)
        .pipe(prettify({config: '.jsbeautifyrc'}))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});
