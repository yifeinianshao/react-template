const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
})
