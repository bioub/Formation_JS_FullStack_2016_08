module.exports = function (grunt) {

    grunt.initConfig({
        useminPrepare: {
            options: {
                dest: 'dist/client'
            },
            html: 'src/client/index.html'
        },
        usemin: {
            html: 'dist/client/index.html'
        },
        cdnify: {
            options: {
                cdn: {
                    jquery: {
                        versions: ['3.1.0'],
                        url: function (version) {
                            return '//code.jquery.com/jquery-' + version + '.min.js'
                        }
                    },
                }
            },
            dist: {
                html: ['dist/client/index.html']
            }
        },
        clean: {
            preDist: ['dist/*'],
            postDist: ['.tmp']
        },
        ngAnnotate: {
            dist: {
                files: {
                    '.tmp/concat/js/app.min.js': ['.tmp/concat/js/app.min.js']
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.html',
                    dest: 'dist/',
                }, {
                    expand: true,
                    cwd: 'src',
                    src: 'serveur/**/*',
                    dest: 'dist/',
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-google-cdn');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('dist', [
        'clean:preDist',
        'useminPrepare',
        'concat:generated',
        'ngAnnotate',
        'uglify:generated',
        'cssmin:generated',
        'copy:dist',
        'usemin',
        'cdnify',
        'clean:postDist',
    ]);
};