const mix = require('laravel-mix');
const postCssVariables = require('postcss-css-variables');

mix.disableNotifications()
  .js('js/app.js', 'dist')
  .sourceMaps()
  .webpackConfig({
    devtool: "source-map",
    externals: {
      jquery: "jQuery"
    }
  })
  .browserSync({
    proxy: 'localhost:8888'
  });
