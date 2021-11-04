// Copy files
module.exports = {

  // Copies files to build destination
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
};
