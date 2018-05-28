const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConf = require('./webpack.base.conf')

module.exports = merge(baseConf, {
  // mode: 'production',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl(us)?$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:7].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
})
