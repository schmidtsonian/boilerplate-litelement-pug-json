module.exports = (gulp, config, browserSync, plugins) => {
  gulp.task('imageCaching', function () {
    return gulp
      .src(config.assets.images.src)
      // Caching images that ran through imagemin
      .pipe(plugins.cache(plugins.imagemin({interlaced: true})))
      .pipe(gulp.dest(config.assets.images.dest));
  });
};
