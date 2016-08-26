module.exports = function(grunt) {

    grunt.initConfig({
        useminPrepare: {
            html: 'src/index.html'
        },
        usemin: {
            html: 'dist/index.html'
        },
        cdnify: {
            options: {
                cdn: {
                    jquery: {
                        versions: ['3.1.0', '3.0.0'],
                        url: function(version) {
                            return '//code.jquery.com/jquery-' + version + '.min.js'
                        }
                    },
                }
            },
            dist: {
                html: ['dist/index.html']
            }
        },
        clean: {
            preDist: ['dist/*'],
            postDist: ['.tmp']
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'src',
                src: '**.html',
                dest: 'dist/',
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-google-cdn');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('dist', [
        'clean:preDist',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'copy:dist',
        'usemin',
        'cdnify',
        'clean:postDist',
    ]);
};