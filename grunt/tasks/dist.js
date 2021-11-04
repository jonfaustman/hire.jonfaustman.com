// Dist task: build for distribution
module.exports = function(grunt) {
  grunt.registerTask(
    'dist', [
      'build',
      // 'uglify:dist',
      'cssmin:dist',
      'imagemin:dist'
    ]
  );
};
