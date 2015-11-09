'use strict';
var gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

gulp.task('clean', function() {
  return del([
    // here we use a globbing pattern to match everything inside the `dist` folder
    'dist/**/*',
    // we don't want to clean this file though so we negate the pattern
    // '!dist/mobile/deploy.json'
  ]);
});
