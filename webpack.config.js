const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = (env) => {
  const isProd = env.mode === 'production'
  const isDev = !isProd

  return {
    entry: './index.js',
    mode: isProd ? 'production' : 'development',

    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
    },
    output: {
      filename: '[name].[contenthash:9].js',
      clean: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/')
      },
      extensions: ["*", ".js", ".vue", ".json"],
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
              options: { additionalData: `@import "./src/assets/scss/settings/vars.scss";` }
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
        filename: "[name].[contenthash:9].css",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        minify: isProd,
        hash: isProd,
        inject: true,
        scriptLoading: 'defer',
      })
    ],
    optimization: {
      concatenateModules: isProd,
      mangleExports: isProd,
      minimize: isProd,
    }
  };

};

