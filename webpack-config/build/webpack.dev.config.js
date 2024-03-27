const { srcPath } = require('./paths.js');
const webpackCommonConfig = require('./webpack.common.config.js')
const { merge } = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      // 图片
      {
        test: /\.(png|jpg|gif|JPG)$/, use: 'file-loader',
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
  devServer: {
    static: srcPath,
    hot: true,
    port: 9922,
    compress: true, // 启动gzip压缩
  }
})
