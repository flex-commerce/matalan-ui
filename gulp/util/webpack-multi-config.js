var config = require('../config');
if(!config.tasks.js) return;

var path            = require('path');
var webpack         = require('webpack');
var webpackManifest = require('./webpackManifest');

module.exports = function(env) {
  var jsSrc = path.resolve(config.app.src, config.tasks.js.src);
  var jsDest = path.resolve(config.app.dest, config.tasks.js.dest);
  var publicPath = path.join(config.tasks.js.dest, '/');
  // var filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js' // rev for app.js on build
  var filenamePattern = '[name].js';
  var extensions = config.tasks.js.extensions.map(function(extension) {
    return '.' + extension;
  });

  var webpackConfig = {
    context: jsSrc,
    plugins: [
      new webpack.ProvidePlugin({
        // Automtically detect jQuery and $ as free var in modules
        // and inject the jquery library
        // This is required by many jquery plugins
        jQuery: "jquery",
        $: "jquery"
      })
    ],
    resolve: {
      root: jsSrc,
      extensions: [''].concat(extensions)
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node_modules/
        }
      ]
    }
  };

  if(env !== 'test') {
    // Karma doesn't need entry points or output settings
    webpackConfig.entry = config.tasks.js.entries;

    webpackConfig.output= {
      path: path.normalize(jsDest),
      filename: filenamePattern,
      publicPath: publicPath
    };

    if(config.tasks.js.extractSharedJs) {
      // Factor out common dependencies into a shared.js
      webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'shared',
          filename: filenamePattern,
        })
      );
    }
  }

  if(env === 'development') {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
  }

  if(env === 'production') {
    webpackConfig.plugins.push(
      new webpackManifest(publicPath, config.app.dest),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
};
