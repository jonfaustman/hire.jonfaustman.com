// Compile Sass
const sass = require('sass');
module.exports = {
  build: {
    files: [
      {
        expand: true,
        cwd: '<%= src %>css',
        src: [
          '**/*.{scss,sass}'
        ],
        dest: '<%= dest_build %>css',
        ext: '.css'
      }
    ],
    options: {
      implementation: sass,
      outputStyle: 'expanded',
      sourceMap: false
    }
  }
};
