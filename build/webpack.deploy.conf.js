const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.conf'), {
    context: __dirname,

    entry: '../src/index.js',

    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        library: 'sym-components',
        libraryTarget: 'umd',
    },

    externals: {
        vue: 'vue',
    },
});