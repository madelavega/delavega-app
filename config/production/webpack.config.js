const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { HotModuleReplacementPlugin } = require('webpack'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    appRoot = process.cwd(),
      rules = [{
        test   : /\.(js|jsx)$/,
        exclude: /node_modules/,
        use    : {
            loader: 'babel-loader',
        },
        resolve: {
            extensions: [ '.js', '.jsx' ],
        },
    }];

module.exports = {
    mode : 'production',
    entry : './src/index.js' ,
     output : {
         path      : path.resolve(appRoot, 'dist'),
         filename  : '[name].js',
         publicPath: '/',
     },
    module: {
        rules ,
    },
    resolve: {
        modules: [
            'node_modules',
            '../../node_modules',
        ],
        alias: {
            'delavega-lib': 'delavega-lib/dist'
        }
    },
    plugins: [
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(appRoot, 'public', 'index.html'),
        }),

        new webpack.DefinePlugin({
            appEnvConfig: JSON.stringify(
                (function() {
                    let appEnvConfig;
                    try {
                        const config = require('../appEnvConfig');
                        appEnvConfig = config('production');
                    } catch (ignore) {
                        appEnvConfig = {};
                    }
                    return appEnvConfig;
                })()
            )
        }),
    ]
};