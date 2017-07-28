const path = require('path'),
  webpack = require('webpack'),
  copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, 'client/app.js')
    ],
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist/production'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: [
      'node_modules'
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
    // copies assets into different environments folders
    new copyWebpackPlugin([{
      from: (__dirname + '/dist/assets'),
      to: (__dirname + `/dist/production`)
    }])
  ]
};
