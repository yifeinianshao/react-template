const merge = require('webpack-merge')
const portfinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConf = require('./webpack.base.conf')
const { port } = require('../config')

const devWebpackConfig = merge(baseConf, {
  mode: 'development',
  devServer: {
    compress: true,
    https: false,
    port,
    open: false,
    proxy: {}
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

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = port
  portfinder.getPort((err, newPort) => {
    if (err) {
      reject(err)
    } else {
      devWebpackConfig.devServer.port = newPort
      resolve(devWebpackConfig)
    }
  })
})
