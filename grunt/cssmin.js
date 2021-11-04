// Clean and minify CSS
module.exports = {
  dist: {
    cwd: '<%= dest_build %>',
    src: [
      'css/**/*.css',
      '!css/**/*.min.css'
    ],
    dest: '<%= dest_dist %>',
    expand: true,
    sourceMap: true,
    options: {
      level: {
        1: {
          specialComments: 0
        }
      }
    }
  }
};
