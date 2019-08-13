module.exports = (gulp, config, browserSync) => {
  gulp.task('videos', function () {
    return gulp
      .src(config.assets.videos.src)
      .pipe(gulp.dest(config.assets.videos.dest))
      .pipe(browserSync.stream());
  });
};
