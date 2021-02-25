const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { HotModuleReplacementPlugin } = require('webpack'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    appRoot = process.cwd();

module.exports = {
    entry : './src/index.js',
    output: {
        path      : path.resolve(appRoot, 'dist'),
        filename  : '[name].js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test   : /\.(js|jsx)$/,
                exclude: /node_modules/, //don't test node_modules folder
                use    : {
                    loader: 'babel-loader',
                },
                resolve: {
                    extensions: [ '.js', '.jsx' ],
                },
            },
        ],
    },
    plugins: [
    //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(appRoot, 'public', 'index.html'),
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