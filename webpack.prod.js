const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = env => {
    return merge(common(env), {
    
        mode: 'production',
    
        // IMPORTANT: Configure server to disallow access to source maps from public!
        devtool: 'source-map',
        target:"browserslist" ,

        output: {
            path:  __dirname + '/app',
            clean: true, // для очистки папки dist при новом билде
        },
    
    
    });
};
