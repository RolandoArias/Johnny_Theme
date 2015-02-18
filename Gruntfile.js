module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
       files: [
         {expand: true, cwd: 'build/plugins/', src: ['**'], dest: 'assets/plugins/'},
         {expand: true, cwd: 'build/images/', src: ['**'], dest: 'assets/images/'},
         {expand: true, cwd: 'build/fonts/', src: ['**'], dest: 'assets/fonts/'},
         {expand: true, src: ['css/*'], dest: 'assets/',filter: 'isFile'}
       ]
      },
    },
    concat: {
        css_plugins: {
            src: [
                'build/plugins/bootstrap/css/bootstrap.min.css',
                'build/css/global.css',
                'build/plugins/rs-plugin/css/pi.settings.css',
                'build/css/typo.css',                
                'build/plugins/colorbox/colorbox.css',
                'build/css/portafolio.css',                                
                'build/css/slider.css',                                
                'build/css/counters.css',                                
                'build/css/social.css',                                
                'build/css/style.css',                                
                'build/css/font-awesome.min.css',                                
                'build/css/layouts.css',                                
                'build/css/animations.css',                                
                'build/css/typehead.css',                                
                'build/css/horizontal.css',                                
                'build/plugins/fontello/css/fontello.css'                
            ],
            dest: 'assets/css/style_plugins.css'
        },     
        plugins: {
          options: {
            separator: ';',
          },
          src: [
              'build/plugins/jquery-1.11.0.min.js',              
              'build/plugins/bootstrap/js/bootstrap.min.js',              
              'build/plugins/bootstrap-chosen/chosen.jquery.js',              
              'build/plugins/jqery.touchSwipe.min.jsu',
              'build/plugins/gauge.min.js',
              'build/plugins/inview.js',
              'build/plugins/rs-plugin/js/jquery.themepunch.tools.min.js',
              'build/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js',
              'build/plugins/requestAnimationFramePolyfill.min.js',
              'build/plugins/jquery.scrollTo.min.js',
              'build/plugins/colorbox/jquery.colorbox-min.js',
              'build/plugins/jquery.easing.1.3.js',              
              'build/plugins/jquery.gmap.min.js'
          ],
          dest: 'assets/js/plugins.js',
        },
        script: {          
            src: [
            'build/js/pi.global.js',
            'build/js/pi.slider.js',
            'build/js/pi.init.slider.js',
            'build/js/pi.counter.js',
            'build/js/pi.init.counter.js',
            'build/js/pi.parallax.js',
            'build/js/pi.init.parallax.js',
            'build/js/pi.direxionate.js',
            'build/js/typeahead.bundle.js',
            'build/js/sly.min.js',
            'build/js/horizontal.js',
            'build/js/jquery.raty.js',
            //'build/js/jquery.sharrre.min.js'
            ],
            dest: 'assets/js/script.js'
        },
    },
    cssmin: {
      css: {
        src: 'assets/css/style.css',
        dest: 'assets/css/style.min.css'
      },
      css_plugins: {
        src: 'assets/css/style_plugins.css',
        dest: 'assets/css/style_plugins.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['build/js/pi.global.js',
              'build/js/pi.slider.js',
              'build/js/pi.init.slider.js',
              'build/js/pi.counter.js',
              'build/js/pi.init.counter.js',
              'build/js/pi.parallax.js',
              'build/js/pi.init.parallax.js',
              'build/js/pi.direxionate.js',
              'build/js/typeahead.bundle.js',
              'build/js/sly.min.js',
              'build/js/horizontal.js',
              'build/js/jquery.raty.js',
              'build/js/jquery.sharrre.min.js'
        ],
        dest: 'assets/js/script.min.js'
      },
      build2: {
        src: 'assets/js/plugins.js',
        dest: 'assets/js/plugins.min.js'
      }
    },
       watch: {
      js: {
        files: ['build/js/*.js'],
        tasks:['copy','concat','cssmin','uglify']
      },      
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy','uglify','concat','cssmin']);
  };