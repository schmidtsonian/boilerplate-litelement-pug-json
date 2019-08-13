module.exports = (gulp, config, browserSync) => {
  gulp.task('fonts', function () {
    return gulp
      .src(config.assets.fonts.src)
      .pipe(gulp.dest(config.assets.fonts.dest))
      .pipe(browserSync.stream());
  });
};
