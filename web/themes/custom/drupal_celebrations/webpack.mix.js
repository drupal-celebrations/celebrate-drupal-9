const mix = require('laravel-mix');

mix.disableNotifications()
  .js('src/app.js', 'dist')
  .sass('src/app.scss', 'dist')
  .sourceMaps()
  .webpackConfig({
    devtool: "source-map",
    externals: {
      jquery: "jQuery"
    }
  })

