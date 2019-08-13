module.exports = (gulp, config, browserSync) => {
  gulp.task('roots', function () {
    return gulp
      .src(config.assets.roots.src)
      .pipe(gulp.dest(config.assets.roots.dest))
      .pipe(browserSync.stream());
  });
};
