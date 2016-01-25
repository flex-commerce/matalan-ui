'use strict';

var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');

var watchTask = function() {
  var watchableTasks = ['fonts', 'iconFont', 'images', 'imageAssets', 'svgSprite', 'html', 'css'];

  // var cssLintGlob = path.join(config.app.dest, config.tasks.css.dest, 'main.css')
  // watch(cssLintGlob, function() {
  //  require('./csslint')();
  // });

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
