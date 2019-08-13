module.exports = (gulp, config, browserSync, isProduction, fs, plugins) => {
  gulp.task('pugs', function () {
    return gulp
      .src(config.pugs.src)
      .pipe(plugins.plumber())
      .pipe(plugins.data(function () {
        return {isProduction: isProduction};
      }))
      .pipe(plugins.data( function () {
        return {
          'page': JSON.parse(
            fs.readFileSync(config.assets.jsons.dest + '/' + config.assets.jsons.fileName)
          )
        };
      }))

      .pipe(plugins.pug({pretty: !isProduction}))
      .pipe(plugins.filter(config.pugs.filter))
      .pipe(gulp.dest(config.project.dest))
      .pipe(browserSync.stream());
  });
};
