const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = env => {
    return merge(common(env), {

        mode: 'development',
        target: 'web',
        // Use eval-cheap-source-map for accurate line numbers, eval has best build performance
        devtool: 'eval',

        output: {
            pathinfo: true,
        },

        devServer: {
            historyApiFallback: true,
            open: true,
            compress: true,
        }

    });
};
