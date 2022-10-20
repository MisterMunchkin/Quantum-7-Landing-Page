module.exports = function (grunt) {
    grunt.initConfig({

        // define source files and their destinations
        uglify: {
            files: { 
                src: 'js/*.js',  // source files mask
                dest: 'jsm/',    // destination folder
                expand: true,    // allow dynamic building
                flatten: true,   // remove all unnecessary nesting
                ext: '.min.js'   // replace .js to .min.js
            }
        },
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'cssm/',
                ext: '.min.css'
              }]
            }
        },
        watch: {
            js:  { files: 'js/*.js', tasks: [ 'uglify' ] },
            css: { files: 'css/*.css', tasks: [ 'cssmin' ] }
        }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // register at least this one task
    grunt.registerTask('default', [ 'uglify', 'cssmin' ]);
};