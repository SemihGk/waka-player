const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    core: [
      path.join(__dirname, 'client/app.js')
    ],
    player: [
      path.join(__dirname, 'client/players/shaka-player/index.js')
    ],
    test: [
      path.join(__dirname, 'client/core/video-player.js')
    ]
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: `dist/production`,
    port: 3000
  },

  output: {
    path: path.resolve(__dirname, 'dist/production'),
    filename: '[name].js'
  },

  resolve: {
    modules: [
      'node_modules',
      'client'
    ]
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'dist/assets/sample.html',
      inject: 'head'
    }),
    // copies assets into different environments folders
    new copyWebpackPlugin([{
      from: (__dirname + '/dist/assets'),
      to: (__dirname + `/dist/production`)
    }])
  ]
};
