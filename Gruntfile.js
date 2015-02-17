module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
       files: [
         {expand: true, cwd: 'build/plugins/', src: ['**'], dest: 'assets/plugins/'},
         {expand: true, src: ['css/*'], dest: 'assets/',filter: 'isFile'}
       ]
      },
    },
    concat: {
        css: {
            src: [
                'css/*'
            ],
            dest: 'combined.css'
        },
        js: {
            src: [
                'js/*'
            ],
            dest: 'combined.js'
        }
    },
    cssmin: {
      css: {
        src: 'combined.css',
        dest: 'combined.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['lib/js/*.js'],
        dest: 'public/js/build.js'
      }
    },
    jshint: {
      options: {
        jshintrc:true
      },
      uses_defaults: ['lib/js/*.js']
    },
    watch: {
      js: {
        files: ['lib/js/*.js'],
        tasks:['jshint','uglify']
      },      
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','concat', 'cssmin','copy']);
  };