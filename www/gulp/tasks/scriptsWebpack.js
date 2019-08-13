const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = (gulp, config, browserSync, isProduction, plugins) => {

  gulp.task('scriptsWebpack', function () {

    return gulp
      .src(config.scripts.src)
      .pipe(plugins.webpackStream({
        cache: true,
        entry: {
          app: ['./src/scripts/app.js'],
          vendor: [
            'jquery',
            'gsap',
            'lodash/debounce',
            'lodash/each',
            'hammerjs',
            'babel-polyfill'
          ],
        },
        output: {
          filename: '[name].js'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                presets: [config.scripts.presets],
                cacheDirectory: true,
                compact: false
              }
            }
          ],
        },
        mode: isProduction? 'production' : 'development',
        devtool: isProduction ? false : 'eval-source-map',
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              cache: true
            })
          ]
        },
        plugins: [
          new plugins.webpackStream.webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            hammerjs: 'hammerjs',
          })
        ]
      }))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream());
  });
};
