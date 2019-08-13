// Node Modules
const argv         = require('minimist')(process.argv.slice(2));
const browserSync  = require('browser-sync').create();
const del          = require('del');
const fs           = require('fs');
const runSequence  = require('run-sequence');
const gulp         = require('gulp');
const plugins      = require('gulp-load-plugins')({
  overridePattern: false,
  camelize: true,
  pattern: ['webpack*', 'gulp-*', 'gulp.*']
});


// Configuration
const config        = require('./gulp/config');
const isProduction  = argv.production;

// Gulp Modules
require('./gulp/tasks/clean')(gulp, config, del);
// require('./gulp/tasks/scriptsLint')(gulp, config, plugins);
require('./gulp/tasks/scriptsWebpack')(gulp, config, browserSync, isProduction, plugins);
require('./gulp/tasks/styles')(gulp, config, browserSync, isProduction, plugins);
require('./gulp/tasks/imageMin')(gulp, config, browserSync, plugins);
require('./gulp/tasks/imageCaching')(gulp, config, browserSync, plugins);
require('./gulp/tasks/fonts')(gulp, config, browserSync);
require('./gulp/tasks/videos')(gulp, config, browserSync);
require('./gulp/tasks/roots')(gulp, config, browserSync);
require('./gulp/tasks/pugs')(gulp, config, browserSync, isProduction, fs, plugins);

// Gulp Tasks
gulp.task('jsons', function () {
  return gulp.src(config.assets.jsons.src)
    .pipe(plugins.mergeJson({fileName: config.assets.jsons.fileName}))
    .pipe(gulp.dest(config.assets.jsons.dest));
});

// gulp.task('slint', function () {
//   return gulp.src(config.scripts.src)
//     .pipe(plugins.eslint())
//     .pipe(plugins.eslint.format())
//     .pipe(plugins.eslint.failAfterError());
// });
gulp.task('templates', (cb) => runSequence('jsons', 'pugs', cb));
gulp.task('images', (cb) => runSequence('imageMin', 'imageCaching', cb));
// gulp.task('scripts', (cb) => {
//   runSequence('scriptsLint', 'scriptsWebpack', cb);
// });
gulp.task('scripts', (cb) => { runSequence('scriptsWebpack', cb); });


// Gulp Tasks "default"
gulp.task('default', (cb) => {

  // runSequence( 'scripts', cb);
  if (isProduction) {
    runSequence( 'clean', ['scripts', 'styles', 'imageMin', 'fonts', 'videos', 'roots'], 'templates', cb);
  } else {
    runSequence( 'clean', ['scripts', 'styles', 'images', 'fonts', 'videos', 'roots'], 'templates', cb);
  }
});

// Gulp Tasks "watch"
gulp.task('watch', () => {
  browserSync.init({
    server: config.project.dest + '/',
    port:   config.project.port,
    open:   false,
  });

  plugins.watch([config.pugs.src], () => gulp.start('pugs'));
  plugins.watch([config.scripts.src], () => gulp.start('scripts'));
  plugins.watch([config.styles.src], () => gulp.start('styles'));
  plugins.watch([config.assets.images.src], () => gulp.start('images'));
  plugins.watch([config.assets.fonts.src], () => gulp.start('fonts'));
  plugins.watch([config.assets.videos.src], () => gulp.start('videos'));
  plugins.watch([config.assets.roots.src], () => gulp.start('roots'));
  plugins.watch([config.assets.jsons.src], () => gulp.start('templates'));
});
