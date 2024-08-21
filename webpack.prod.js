const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: './dist',
    },
    compress: true,
    port: 9000,
    open: true,
}
}
);