module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      src: [
        'src/*.js'
      ],
      test: [
        'test/unit/*.js'
      ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    },
    karma: {
      options: {
        configFile: 'test/config/karma.config.js'
      },
      unit: {
        background: true
      },
      continuous: {
        singleRun: true
      }
    },
    watch: {
      karma: {
        files: ['src/*.js', 'test/unit/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'karma:continuous', 'karma:unit']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
};
