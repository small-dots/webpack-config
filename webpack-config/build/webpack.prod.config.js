const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config.js')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { distPath } = require('./paths.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif|JPG)$/, use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 500 * 1024,
            outputPath: '/images_dist/'
          }
        }
      },
      // 抽离css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 不再使用style-loader，如此样式就不再塞到style标签中
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.[contenthash:8].css"
    })
  ],
  // 压缩
  optimization: {
    minimizer: [
      new optimizeCss({}),
      new TerserJSPlugin({}),
    ]
  }
});
