const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    static: {
      directory: './dist',
    },
    compress: true,
    port: 9000,
    hot: true, 
    open: true,
  },
  devtool: 'inline-source-map', 
});