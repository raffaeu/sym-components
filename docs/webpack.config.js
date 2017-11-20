const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('../build/webpack.base'), {
    context: __dirname,

    entry: './app.js',

    output: {
        path: path.resolve(__dirname, 'resources/'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module:{
        loaders:[
            { test: /\.vue$/, loader: 'vue'}
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    }
});