const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist'
    },
    output: {
        filename: 'main.js'
    }, 
    plugins: [
        new HtmlWebpackPlugin(
            {template: './src/index.html'},
        )
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.pug$/,
				loader: 'pug-loader',
				options: {
				pretty: true}
            }
        ]
    }
}