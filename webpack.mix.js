const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copyDirectory('resources/assets/img', 'public/images')
  .js('resources/assets/js/app.js', 'public/js')
  .js('resources/assets/js/locale/en.js', 'public/js/locale')
  .js('resources/assets/js/locale/zh_CN.js', 'public/js/locale')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .sass('resources/assets/sass/themes/black.scss', 'public/css/themes')
  .sass('resources/assets/sass/themes/bootstrap.scss', 'public/css/themes')
  .sass('resources/assets/sass/themes/default.scss', 'public/css/themes')
  .sass('resources/assets/sass/themes/gray.scss', 'public/css/themes')
  .sass('resources/assets/sass/themes/material.scss', 'public/css/themes')
  .sass('resources/assets/sass/themes/metro.scss', 'public/css/themes');
