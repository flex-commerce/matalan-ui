/*jslint node: true */
'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    foreach      = require('gulp-foreach'),
    hb           = require('gulp-hb'),
    path         = require('path'),
    prettify     = require('gulp-jsbeautifier'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors'),
    browserSync  = require('browser-sync');



gulp.task('html', function () {
    return gulp
        .src('./src/htdocs/**/*.html')
        .pipe(hb({
            helpers: 'src/hb-helpers/*.js',
            partials: 'src/htdocs/**/*.hbs',
            bustCache: true
        }))
        .on('error', handleErrors)
        // .pipe(prettify({config: '.jsbeautifyrc'}))
        .pipe(gulp.dest(config.app.dest))
        .pipe(browserSync.reload({stream:true}));
});

// todo - rebuild this wth handlebars

// var config       = require('../config')
// if(!config.tasks.html) return

// var browserSync  = require('browser-sync')
// // var data         = require('gulp-data')
// var gulp         = require('gulp')
// var gulpif       = require('gulp-if')
// var handleErrors = require('../util/handleErrors')
// var htmlmin      = require('gulp-htmlmin')
// var path         = require('path')
// // var render       = require('gulp-nunjucks-render')
// var fs           = require('fs')

// var exclude = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

// var paths = {
//   src: [path.join(config.app.src, config.tasks.html.src, '/**/*.html'), exclude],
//   dest: path.join(config.app.dest, config.tasks.html.dest),
// }

// var getData = function(file) {
//   var dataPath = path.resolve(config.app.src, config.tasks.html.src, config.tasks.html.dataFile)
//   return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
// }

// var htmlTask = function() {
//   // render.nunjucks.configure([path.join(config.app.src, config.tasks.html.src)], {watch: false })

//   return gulp.src(paths.src)
//     // .pipe(data(getData))
//     .on('error', handleErrors)
//     .pipe(render())
//     .on('error', handleErrors)
//     .pipe(gulpif(process.env.NODE_ENV == 'production', htmlmin(config.tasks.html.htmlmin)))
//     .pipe(gulp.dest(paths.dest))
//     .pipe(browserSync.stream())
// }

// gulp.task('html', htmlTask)
// module.exports = htmlTask
