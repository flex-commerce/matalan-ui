'use strict';

var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');

var watchTask = function() {
  var watchableTasks = ['html', 'css', 'fonts', 'iconFont', 'images', 'svgSprite'];

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName];
    if(task) {
      var glob = path.join(config.app.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      watch(glob, function() {
       require('./' + taskName)();
      });
    }
  });

  // var hbs = config.tasks.hbs;
  // var hbsGlob = path.join(config.app.src, hbs.src, '**/*.{' + hbs.extensions.join(',') + '}');
  // watch(hbsGlob, function() {
  //   console.log(hbsGlob);
  //  require('./html')();
  // });

};

gulp.task('watch', ['browserSync'], watchTask);
module.exports = watchTask;
