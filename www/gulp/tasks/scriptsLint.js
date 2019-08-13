module.exports = (gulp, config, plugins) => {
  gulp.task('scriptsLint', function () {
    return gulp
      .src(config.scripts.src)
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failAfterError());
  });
};
