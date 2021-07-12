const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')
const fs = require('fs');

// htmlPages масив всех html в src

// const htmlPages =
//   fs
//     .readdirSync(path.resolve(__dirname, 'src'))
//     .filter(fileName => fileName.endsWith('.html'));


  module.exports = (env) => {

  const buildMode = !!env.WEBPACK_BUILD;
  const serveMode = !!env.WEBPACK_SERVE;
  // console.log('serveMode?: ', serveMode );
  // console.log('buildMode?: ', buildMode );



  if (serveMode) 
    {
    return serveConfig;
    };
    
    if (buildMode) 
    {
    const mergeConfig = {
        ...serveConfig,
        ...buildConfig
    };
    return mergeConfig;
    };
    return serveConfig;
};

const serveConfig = {

  context: path.resolve(__dirname, 'src/'),
  entry: __dirname + '/index.js',
  devtool: 'source-map',

  target: process.env.WEBPACK_BUILD === "build" ? "browserslist" : "web",

  output: {

    // filename: '[name].[contenthash].js'
    // filename: 'index.js'
    // filename: '[name].js'

    path:  __dirname + '/app',

    clean: true, // для очистки папки dist при новом билде

  },


  devServer: {

    historyApiFallback: true,
    open: true,
    compress: true,

  },

  module: {

    rules: [

      // // css,post css
      // // {
      //   use: [
      //     // could replace the next line with "style-loader" here for inline css
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader",
      //     // according to the docs, sass-loader should be at the bottom, which
      //     // loads it first to avoid prefixes in your sourcemaps and other issues.
      //     "sass-loader",
      //   ],
      // // },
      
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader","postcss-loader"],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

    //   {
    //     test: /\.(jpe?g|png|gif|svg|ico)$/i,

    //     use: [{
    //         loader: 'file-loader',
    //         options: {
    //             // name: '[path][name][contenthash].[ext]',
    //             // name: '[path][name].[ext]',
    //             // outputPath: 'img/'
    //         }
    //     }]
    // },

    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      type: 'asset/resource',
          generator: {
        filename: 'img/[name].[contenthash][ext]'

          //  : 'img/[name].[contenthash][ext]'
      // generator: {
      //   filename: () => {
      //     return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
      //   }
      // }
    }
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
  optimization: {
    runtimeChunk: 'single'
},
  plugins: [
    

  //   ...htmlPages.map(page => new HtmlWebpackPlugin({

  //     template: __dirname + '/src/' + page,
  //     minify: false,
  //     scriptLoading: 'defer',
  //     // mode: 'serve',
  //     title:'i iam htmlWebpackPlugin Title',
  //     filename: page,
    
  //   //   // filename: require('path').basename(page, '.html') + '.php',
  //   //   // меняем расширение выдаем сжатый php

  // })),

  
    new HtmlWebpackPlugin({

      template: __dirname + '/src/index.html',
      // сжатие файла
      minify: false,
      scriptLoading: 'defer',

      title:'i iam htmlWebpackPlugin Title',
      

      // filename: require('path').basename(page, '.html') + '.php',
      // меняем расширение выдаем сжатый php

    }),

    // new MiniCssExtractPlugin(),

  ],

};


const buildConfig=
{

}