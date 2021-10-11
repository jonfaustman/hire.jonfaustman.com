// Concatenate files
module.exports = {

  // CSS files
  build_css: {
    src: [
      '<%= src %>css/lib/**/*.css',
      '<%= dest_build %>css/<%= pkg.name %>/<%= pkg.name %>.css'
    ],
    dest: '<%= dest_build %>css/<%= pkg.name %>/<%= pkg.name %>.css'
  }
};
