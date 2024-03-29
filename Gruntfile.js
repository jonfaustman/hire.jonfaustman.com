module.exports = function(grunt) {

  // Load npm tasks and configure options
  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      src: 'src/',
      dest_build: 'static/',
      dest_dist: '<%= dest_build %>'
    }
  });

  // Display the elapsed execution time of Grunt tasks
  require('time-grunt')(grunt);

  // Load custom tasks
  grunt.loadTasks('grunt/tasks');
};
