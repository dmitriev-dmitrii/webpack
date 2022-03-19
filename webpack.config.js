const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  const isDev = !!env.WEBPACK_SERVE
  const isProd = !!env.WEBPACK_BUILD
  console.log('mode: isDev ' + isDev);
  console.log('mode: isProd ' + isProd);

  return {
    entry: './index.js',
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
    },
    output: {
      filename: '[hash].js',
      clean: true
    },

    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: { additionalData: `@import "./src/assets/scss/vars.scss";` }
            }
          ],
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        minify: isProd,
        hash: isProd,
        inject: true,
        scriptLoading: 'defer',
      })
    ]
  };

};

