const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const postCssVariables = require('postcss-css-variables');
const postCssPurgeCss = require('@fullhuman/postcss-purgecss');

const purgecss = postCssPurgeCss({
  content: [
    './templates/**/*.twig',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

mix.disableNotifications()
  .js('src/js/app.js', 'dist')
  .sass('src/css/app.scss', 'dist')
  .options({
    processCssUrls: false,
    postCss: [
      postCssVariables(),
      tailwindcss('./tailwind.config.js'),
      // process.env.NODE_ENV === "production" && purgecss,
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
    proxy: 'localhost:8888',
    files: [
      'dist/css/app.css',
      'dist/js/app.js',
      'templates/**/*',
      'src/**/*',
      'images/**/*',
      'fonts/**/*',
      '../../../modules/custom/**/*',
    ]
  });
