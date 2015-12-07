/* https://github.com/shannonmoeller/gulp-hb */

/*jslint node: true */
'use strict';

var config       = require('../config');
  if(!config.tasks.html) return;

var gulp         = require('gulp'),
    foreach      = require('gulp-foreach'),
    hb           = require('gulp-hb'),
    path         = require('path'),
    prettify     = require('gulp-jsbeautifier'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors'),
    browserSync  = require('browser-sync'),
    changed     = require('gulp-changed'),
    gulpif       = require('gulp-if'),
    htmlmin      = require('gulp-htmlmin'),
    htmlhint     = require("gulp-htmlhint"),
    removeCode   = require('gulp-remove-code');

var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**');

var paths = {
  src: [path.join(config.app.src, config.tasks.html.src, '/**/*'), exclude],
  dest: path.join(config.app.dest, config.tasks.html.dest),
};

var htmlTask = function() {

  return gulp.src(paths.src)
    // .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(hb({
        data: path.join(config.app.src, config.tasks.hbs.data, '/*.{js,json}'),
        helpers: path.join(config.app.src, config.tasks.hbs.helpers, '/*.js'),
        partials: path.join(config.app.src, config.tasks.hbs.partials, '/**/*.hbs'),
        bustCache: true
    }))
    .on('error', handleErrors)
    .pipe(gulpif(process.env.NODE_ENV == 'production', removeCode({ production: true })))
    // .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
    // .pipe(prettify({config: '.jsbeautifyrc'}))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter('htmlhint-stylish'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('html', htmlTask);
module.exports = htmlTask;


