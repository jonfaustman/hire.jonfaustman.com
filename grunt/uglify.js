// Minify JavaScript
module.exports = {
  dist: {
    cwd: '<%= dest_build %>',
    src: [
      'js/**/*.js',
      '!js/**/*.min.js'
    ],
    dest: '<%= dest_dist %>',
    ext: '.min.js',
    expand: true
  }
};
