'use strict';

// var gulp     = require('gulp');
// var config   = require('../config');

// gulp.task('watch', ['browserSync'], function(callback) {
//   gulp.watch(config.sass.src,   ['sass','sass:lint']);
//   gulp.watch(config.markup.src, ['markup']);
//   gulp.watch(config.fonts.src,  ['fonts']);
//   gulp.watch(config.img.src,  ['images']);
//   gulp.watch(config.js.src,  ['js']);
// });


var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');

var watchTask = function() {
  var watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite','html', 'css'];

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName];
    if(task) {
      var glob = path.join(config.app.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      watch(glob, function() {
       require('./' + taskName)();
      });
    }
  });
};

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
