const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.disableNotifications()
  .js('src/app.js', 'dist')
  .sass('src/app.scss', 'dist')
  .tailwind()
  .sourceMaps()
  .webpackConfig({
    devtool: "source-map",
    externals: {
      jquery: "jQuery"
    }
  })

