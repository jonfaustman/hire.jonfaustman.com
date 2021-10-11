// Run CSS post-processing
module.exports = {
  build: {
    src: '<%= dest_build %>css/**/*.css'
  },
  options: {
    processors: [
      require('autoprefixer')
    ]
  }
};