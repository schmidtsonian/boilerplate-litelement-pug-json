module.exports = (gulp, config, browserSync, isProduction, plugins) => {
  gulp.task('styles', function () {
    return gulp
      .src(config.styles.src)
      .pipe(plugins.plumber())
      .pipe(plugins.if(!isProduction, plugins.sourcemaps.init()))

      .pipe(plugins.sass({outputStyle:  isProduction ? 'compressed' : 'expanded'})).on('error', plugins.sass.logError)
      .pipe(plugins.autoprefixer({grid: true}))
      .pipe(plugins.if(isProduction, plugins.cssnano()))

      .pipe(plugins.if(!isProduction, plugins.sourcemaps.write('.')))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream());
  });
};
