// Clean and minify CSS
module.exports = {

  // TODO: Fix the generated sourcemaps to point to source scss files
  //       (https://github.com/gruntjs/grunt-contrib-cssmin/issues/248)

  // TODO: clean-css removes trailing semicolons, which is not ideal for build (and possibly dist)
  //       (https://github.com/jakubpawlowicz/clean-css/issues/980)

  build: {
    cwd: '<%= dest_build %>',
    src: [
      'css/**/*.css',
      '!css/**/*.min.css'
    ],
    dest: '<%= dest_build %>',
    expand: true,
    sourceMap: true,
    options: {
      level: {
        1: {
          all: false,
          specialComments: 0
        },
        2: {
          all: false,
          duplicateRulesRemoving: true
        }
      },
      format: 'beautify'
    }
  },

  dist: {
    cwd: '<%= dest_build %>',
    src: [
      'css/**/*.css',
      '!css/**/*.min.css'
    ],
    dest: '<%= dest_dist %>',
    ext: '.min.css',
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
