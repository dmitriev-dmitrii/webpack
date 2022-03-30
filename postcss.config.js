module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: ['./**/*.*']
    }),
    require('postcss-sort-media-queries'),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')
  ]
};
