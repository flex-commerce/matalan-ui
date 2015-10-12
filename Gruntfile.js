'use strict';

// This shows a full config file!
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt, {pattern: 'grunt-contrib-*'});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src: 'src',
    dist: 'dist',

    watch: {
      files: '<%= src %>/scss/**/*.scss',
      tasks: ['sass']
    },


    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '<%= src %>/css/*.css',
            '<%= src %>/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: '<%= dist %>'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded', // expanded or nested or compact or compressed
          // loadPath: '<%= src %>/bower_components/foundation/scss',
          compass: false,
          quiet: true
        },
        files: {
          '<%= dist %>/css/main.css': '<%= src %>/scss/main.scss'
        }
      }
    },

    postcss: {
    // options: {
    //  rocessors: [
    //   require('autoprefixer')()
    //
    // },
    // dist: {
    //   src: '<%= app %>/css/app.css'
    // }
    },


  });

  // load npm tasks
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('dev', ['sass', 'watch']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
