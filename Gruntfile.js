
module.exports = function(grunt) {

  var watched_files = ['config/*', 'controllers/*', 'lib/*', '*.js', '*.json'];

  grunt.initConfig({

    jshint: {
      all: watched_files
    },

    nodemon: {
      script: 'server.js',
      options: {
        ignore: ['node_modules/**'],
        watch: watched_files,
        delay: 1
      }
    },

    simplemocha: {
      options: {
          timeout: 3000,
          ignoreLeaks: false,
          ui: 'bdd',
          reporter: 'spec'
        },
      local: {
        src: ['test/**/*.test.js']
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['jshint', 'nodemon']);
  grunt.registerTask('test', ['jshint', 'simplemocha:local']);

};