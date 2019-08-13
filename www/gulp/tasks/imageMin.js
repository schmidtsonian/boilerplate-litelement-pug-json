module.exports = (gulp, config, browserSync, plugins) => {
  gulp.task('imageMin', function () {
    return gulp
      .src(config.assets.images.src)
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(config.assets.images.dest))
      .pipe(browserSync.stream());
  });
};
