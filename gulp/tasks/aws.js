'use strict';

var gulp        = require('gulp'),
    awspublish  = require('gulp-awspublish'),
    parallelize = require("concurrent-transform"),
    awssecret   = require('../../aws-secret.json');

var awsPublishTask = function() {
  var sprint = 5;

  gulp.src(['dist/**/*']).pipe(gulp.dest('dist/' + sprint));

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create(awssecret);

  // define custom headers
  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  return gulp.src('./dist/**/*')
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(parallelize(publisher.publish(), 10))
    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())
     // print upload updates to console
    .pipe(awspublish.reporter());

}


gulp.task('publish:aws', ['production'], awsPublishTask);
module.exports = awsPublishTask;