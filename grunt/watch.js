// Watch files for changes
module.exports = {

  // Sass files
  sass: {
    files: [
      '<%= src %>css/**/*.{sass,scss}'
    ],
    tasks: [
      'sass:build',
      'concat:build_css',
      'postcss:build'
    ]
  },

  // JavaScript and HTML files
  copy: {
    files: [
      '<%= src %>js/**/*.js',
      '<%= src %>html/**/*.html'
    ],
    tasks: [
      'copy:build',
      'concat:build_js'
    ]
  },

  // Livereload support
  livereload: {
    options: {
      livereload: true
    },
    files: [
      '<%= dest_build %>/css/**/*.css'
    ]
  }
};
