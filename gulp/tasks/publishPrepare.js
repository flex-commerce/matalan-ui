'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var path = require('path');
var config = require('../config');
var pkg = require('../../package.json');


var archiveRoot = 'archive';
var archiveName = archiveRoot + pkg.currentSprint + '.zip';
var archiveNum = pkg.currentSprint;

var paths = {
  destFiles: path.join(config.app.dest, '**'),
  destArchive: path.join(config.app.dest, archiveRoot, archiveNum)
};


var publishPrepareZipTask = function() {
  return gulp.src(paths.destFiles)
  .pipe(zip(archiveName))
  .pipe(gulp.dest(path.join(config.app.dest, archiveRoot)));
}


var publishPrepareTask = function() {
  return gulp.src([
    paths.destFiles,
    path.join('!**', config.app.dest, archiveRoot, '**'),
    path.join('!**', config.app.dest, archiveRoot)
    ])
  .pipe(gulp.dest(paths.destArchive));
}


gulp.task('publishPrepare', ['publishPrepareZip'], publishPrepareTask);
gulp.task('publishPrepareZip', publishPrepareZipTask);

module.exports = publishPrepareZipTask;
module.exports = publishPrepareTask;


