
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : ['babel-polyfill', 'react', 'react-dom', './test4.js'],
    output : {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
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
    }
};