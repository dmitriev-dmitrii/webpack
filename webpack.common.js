
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const fs = require('fs');
const path = require('path');

const htmlPages =
    fs.readdirSync(path.resolve(__dirname, 'src'))
        .filter(fileName => fileName.endsWith('.html'));

module.exports = env => {
    // Is the current build a development build
    const IS_DEV = !!env.dev;

    return {

        context: path.resolve(__dirname, 'src/'),
        entry: __dirname + '/index.js',

        plugins: [

            ...htmlPages.map(page => new HtmlWebpackPlugin({

                template: __dirname + '/src/' + page,
                minify: false,
                hash: true,
                scriptLoading: 'defer',
                // mode: 'serve',

                title: 'i iam htmlWebpackPlugin Title',
                filename: page,

                  // filename: require('path').basename(page, '.html') + '.php',
                  // меняем расширение выдаем сжатый php

            })),

            new MiniCssExtractPlugin(),
        ],

        module: {
            rules: [
                // BABEL    
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: true
                        }
                    }
                },
                // css,post css
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        //   "sass-loader",
                    ],
                },

                // IMAGES
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                },

                // SVG
                {
                    test: /\.svg$/,
                    use: [
                        'raw-loader'
                    ]
                }
            ]
        },
        optimization: {
            runtimeChunk: 'single'
        }
    };
};
