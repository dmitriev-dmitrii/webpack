const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const fs = require('fs');

// htmlPages масив всех html в src

const htmlPages =
  fs
    .readdirSync(path.resolve(__dirname, 'src'))
    .filter(fileName => fileName.endsWith('.html'));


  module.exports = (env) => {

  // console.log('ENV: ', env);

  // const buildMode = !!env.WEBPACK_BUILD;
  // const serveMode = !!env.WEBPACK_SERVE;

  // console.log('serveMode?: ', serveMode );
  // console.log('buildMode?: ', buildMode );

  // serveConfig это конфиги по умолчанию

  //   const serveConfig = 
  // {

  // };

  // serveConfig END

  // buildConfig 

//   const buildConfig = 

// {};

// buildConfig END

  // if (serveMode) 
  //   {
  //   return serveConfig;
  //   };
    
  //   if (buildMode) 
  //   {
  //   const currentConfig = {
  //       ...serveConfig,
  //       ...buildConfig
  //   };
  //   return currentConfig;
  //   };

    return testconfig;
};

  testconfig = {

  context: path.resolve(__dirname, 'src'),
  entry: __dirname + '/src/index.js',
  devtool: 'inline-source-map',
  target: 'web',

  output: {

    // filename: '[name].[contenthash].js'
    // filename: 'index.js'
    // filename: '[name].js'

    path:  __dirname + '/app',
    clean: true, // для очистки папки dist при новом билде

  },

  devServer: {

    // historyApiFallback: true,
    // contentBase: __dirname + '/src/',
    open: true,
    compress: true,

  },

  module: {

    rules: [

      // css,post css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
          },
          
        ]
      },


      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [{
            loader: 'file-loader',
            options: {
                // name: '[path][name][contenthash].[ext]',
                // outputPath: 'img/'
            }
        }]
    },

          // babel   

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false
          }
        }
      },

    ]

  },

  plugins: [
    

    ...htmlPages.map(page => new HtmlWebpackPlugin({

      template: __dirname + '/src/' + page,
      minify: false,
      scriptLoading: 'defer',
      // mode: 'serve',
      title:'i iam htmlWebpackPlugin Title',
      filename: page,
    
    //   // filename: require('path').basename(page, '.html') + '.php',
    //   // меняем расширение выдаем сжатый php

  })),

    // new HtmlWebpackPlugin({

    //   template: __dirname + '/src/index.html',
    //   minify: false,
    //   scriptLoading: 'defer',
    //   // mode: 'serve',
    //   title:'i iam htmlWebpackPlugin Title',

    //   // filename: require('path').basename(page, '.html') + '.php',
    //   // меняем расширение выдаем сжатый php

    // }),

    new MiniCssExtractPlugin(),
  ],

};