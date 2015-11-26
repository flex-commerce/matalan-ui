// todo - finalise

var config      = require('../config');
// if(!config.tasks.modernizr) return

var gulp        = require('gulp');
var modernizr = require('gulp-modernizr');
var uglify = require('gulp-uglify');
var path        = require('path');

var modernizrSettings = {
      "cache" : true,
      "devFile" : false,
      "options" : [
          "setClasses",
          "addTest",
          "html5printshiv",
          "testProp",
          "fnBind"
      ],
      "tests" : [],
      "excludeTests": [],
      "crawl" : true,
      "useBuffers": false,
      "files" : {
          "src": [
              path.join(config.app.src, config.tasks.js.src, '/modules/**/*.js'),
              path.join(config.app.src, config.tasks.css.src, '/**/*.scss'),
          ]
      },
      "customTests" : []
  };



var modernizrTask = function() {

  var settings = {
    dest: path.join(config.app.dest, config.tasks.js.dest)
  };

  return gulp.src(modernizrSettings.files.src)
    .pipe(modernizr('modernizr-custom.js', modernizrSettings))
    // .pipe(uglify())
    .pipe(gulp.dest(settings.dest));
};

gulp.task('modernizr', modernizrTask);
module.exports = modernizrTask;


