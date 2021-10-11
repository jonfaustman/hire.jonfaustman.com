// Copy files
module.exports = {

  // Copies to static/build/
  build: {
    cwd: '<%= src %>',
    src: [
      '**',
      '!**/css/**',
      '!**/js/**',
      '!**/sprite/**',
      '!**/*.{sketch,eps,psd,ai}'
    ],
    dest: '<%= dest_build %>',
    expand: true
  },

  // Copies static/build/ --> static/dist/<version>/
  dist: {
    cwd: '<%= dest_build %>',
    src: [
      '**',
      '!**/js/**',
      '!**/css/**'
    ],
    dest: '<%= dest_dist %>',
    expand: true
  }
};
