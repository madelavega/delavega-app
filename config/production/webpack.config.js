const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { HotModuleReplacementPlugin } = require('webpack'),
      CopyPlugin = require("copy-webpack-plugin"),
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
         path      : path.resolve(appRoot, 'build'),
         filename  : '[name].js',
         publicPath: '/delavega-app/',
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
        //this must not be here. It should be only for development purposes, but it
        //has been added to see something deployed, until the production service can be
        //accessible. In the services.js file I've included the mockup url. It must to be
        //removed from there, and replaced with the production one
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