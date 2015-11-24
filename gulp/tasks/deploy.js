'use strict';

var gulp = require('gulp');

gulp.task('deploy:aws', [
    'clean:aws',
    'awspush'
  ]);
