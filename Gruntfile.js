module.exports = function(grunt) {

  // Load npm tasks and configure options
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      src: 'src/',
      dest_build: 'static/build/',
      dest_dist: 'static/dist/<%= pkg.version %>/'
    }
  });

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load custom tasks
  grunt.loadTasks('grunt/tasks');
};
