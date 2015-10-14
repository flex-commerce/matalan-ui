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
        src: src + '/htdocs/*.{html,hbs}',
        dest: dest,
        hbGlobal: src + '/hbassets/data-global',
        hbPage: src + '/hbassets/data-page',
        hbHelpers: src + '/hbassets/helpers',
        hbPartials: src + '/hbassets/partials'
    },

    production: {
        cssSrc: dest + '/css/*.css',
        jsSrc: dest + '/js/*.js',
        dest: dest
    }
};
