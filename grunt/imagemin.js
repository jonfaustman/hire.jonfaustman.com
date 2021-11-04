// Optimize images
module.exports = {
  dist: {
    optimizationLevel: 5,
    expand: true,
    cwd: '<%= dest_build %>',
    src: [
      'img/**/*.{png,jpg,gif}'
    ],
    dest: '<%= dest_dist %>'
  }
};
