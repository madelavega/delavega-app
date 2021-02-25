const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require("copy-webpack-plugin"),
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
    mode : 'development',
    entry: './src/index.js' ,
    output: {
        path      : path.resolve(appRoot, 'buid'),
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
        new CopyPlugin({
            patterns: [
                { from: "mockups", to: "mockups" },
            ],
        }),
        new webpack.DefinePlugin({
            appEnvConfig: JSON.stringify(
                (function() {
                    let appEnvConfig;
                    try {
                        const config = require('../appEnvConfig');
                        appEnvConfig = config('development');
                    } catch (ignore) {
                        appEnvConfig = {};
                    }
                    return appEnvConfig;
                })()
            )
        }),
    ],
    devServer: {
        contentBase       : path.resolve(appRoot, 'dist'),
        hot               : true,
        port              : 8000,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
};