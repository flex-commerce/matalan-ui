'use strict';
var gulp = require('gulp'),
    awspublish = require('gulp-awspublish'),
    awssecret = require('../../aws-secret.json'),
    rename = require('gulp-rename');

gulp.task('publish:aws', function() {

  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newdate = year + "-" + month + "-" + day;

  gulp.src(['dist/**/*']).pipe(gulp.dest('aws/' + newdate));

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create(awssecret);

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=1, no-transform, public'
    // ...
  };

  return gulp.src('./aws/**/*')
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))
    .pipe(publisher.sync())
    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});