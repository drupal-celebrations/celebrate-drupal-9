const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const postCssVariables = require('postcss-css-variables');

mix.disableNotifications()
  .js('src/js/app.js', 'dist')
  .sass('src/css/app.scss', 'dist')
  .options({
    processCssUrls: false,
    postCss: [
      postCssVariables(),
      tailwindcss('./tailwind.config.js'),
    ],
  })
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
