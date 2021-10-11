// Dist task: build for distribution
module.exports = function(grunt) {
  grunt.registerTask(
    'dist', [
      'build',
      'clean:dist',
      'copy:dist',
      'uglify:dist',
      'cssmin:dist',
      'imagemin:dist'
    ]
  );
};
