var config = require('../config');
var compact = require('lodash/array/compact');

// Grouped by what can run in parallel
var assetTasks = ['fonts', 'iconFont', 'images', 'imageAssets',  'svgSprite', 'favicon', 'data'];
var codeTasks = ['html', 'css', 'js'];

module.exports = function(env) {

  // translation for various webpack js methods based on environment
  var jsTasks = {
    watch: 'webpack:watch',
    development: 'webpack:watch',
    production: 'webpack:production'
  };

  // handle various webpack js methods based on environment
  var matchFilter = function(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = jsTasks[env] || jsTask.watch;
      }
      return task;
    }
  };

  return {
    assetTasks: compact(assetTasks.map(matchFilter)),
    codeTasks: compact(codeTasks.map(matchFilter))
  };
};
