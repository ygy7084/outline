
var { resolve } = require('path');
var webpack = require('webpack');

module.exports = [{
    name : 'client side',

    context : resolve(__dirname, 'src'),
    //default directory

    entry : [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        'whatwg-fetch',
        'react',
        'react-dom',
        './index.js'],
    //what to webpack first

    output : {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    //where to put bundle.js

    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        historyApiFallback : true
        //historyApiFallback -> only for devserver
    },
    //for webpack-dev-server

    module: {
        loaders : [
            {
                test: /\.js$/,
                loaders : ['babel-loader?'+JSON.stringify({
                    cacheDirectory : true,
                    presets : ['es2015', 'react']
                })],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader : 'style!css-loader'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    //webpack modules

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
    //for webpack-dev-server and react-hot-loader
}
];