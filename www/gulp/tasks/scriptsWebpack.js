const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = (gulp, config, browserSync, isProduction, plugins) => {

  gulp.task('scriptsWebpack', function () {

    return gulp
      .src(config.scripts.src)
      .pipe(plugins.webpackStream({
        cache: true,
        entry: {
          app: ['./src/scripts/app.ts'],
          vendor: [
            'jquery',
            'gsap',
            'lodash/debounce',
            'lodash/each',
            'hammerjs',
          ],
        },
        output: {
          filename: '[name].js'
        },
        module: {
          rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/
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
        resolve: {
          extensions: ['.tsx', '.ts', '.js']
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
