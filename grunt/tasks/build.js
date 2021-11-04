// Build task: build for develop
module.exports = function(grunt) {
  grunt.registerTask(
    'build', [
      'clean:build',
      'sass:build',
      'copy:build',
      'postcss:build'
    ]
  );
};
