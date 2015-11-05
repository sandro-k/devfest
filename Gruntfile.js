/* global module:false */

module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
            },

            html: {
                files: ['*.html', 'step*/*.html'],
                tasks: []
            }
        },

        connect: {
            server: {
                options: {
                    open: true,
                    port: 9001,
                    base: '.',
                    livereload: true,
                }
            }
        }
    });

    // Load grunt watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load grunt connect
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect', 'watch'])

};
