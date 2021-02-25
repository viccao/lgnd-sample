const mix = require("laravel-mix");

mix.browserSync({
  //Set local proxy
  proxy: "http://192.168.86.35:5500/index.html",
  files: "dist/css/app.css",
});

mix.setPublicPath("./dist");

// let config = {
//     plugins: [],
// };

// mix.webpackConfig(config);

mix.sass("src/scss/app.scss", "./dist/css");
mix.js("src/js/app.js", "./dist/js");

mix.options({
  processCssUrls: false,
  cssNano: {
    discardComments: {
      removeAll: true,
    },
    discardDuplicates: true,
    mergeLonghand: true,
    mergeRules: true,
    discardEmpty: true,
    discardOverridden: true,
  },
});
