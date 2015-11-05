'use strict';

var dest = "./dist";
var src = './src';

module.exports = {

    browserSync: {
        server: {
            baseDir: dest
        }
    },

    sass: {
        src: "src/scss/**/*.scss",
        dest: dest + '/css/',
        settings: {
            indentedSyntax: false,
            sourcemap: true
        }
    },


    markup: {
        src: src + '/htdocs/{,**/}*.{html,hbs}',
        dest: dest,
        hbHelpers: src + '/hb-helpers/*.js',
    },

    fonts: {
        src: src + '/fonts/*.{eot,svg,ttf,woff}',
        dest: dest + '/fonts/',
    },

    img: {
        src: src + '/img/*',
        dest: dest + '/img/',
    },

    js: {
        src: src + '/js/*.js',
        dest: dest + '/js/',
    },

    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        dest: dest
    }
};
