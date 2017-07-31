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
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/development'),
    filename: 'bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },

  devServer: {
    historyApiFallback: true,
    contentBase: `./dist/development`,
    hot: true,
    port: 8080
  },

  resolve: {
    modules: [
      'node_modules',
      'client'
    ]
  },

  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      use: "eslint-loader",
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    // live development
    new webpack.HotModuleReplacementPlugin(),
    // prints more readible module names in the HMR updates
    new webpack.NamedModulesPlugin(),
    // defines global variables in the files
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // source map
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    // copies assets into different environments folders
    new copyWebpackPlugin([{
      from: (__dirname + '/dist/assets'),
      to: (__dirname + `/dist/development`)
    }, {
      from: (__dirname + '/node_modules/shaka-player/lib'),
      to: (__dirname + `/dist/development/lib`)
    }, {
      from: (__dirname + '/node_modules/shaka-player/third_party'),
      to: (__dirname + `/dist/development/third_party`)
    }, {
      from: (__dirname + '/node_modules/shaka-player/shaka-player.uncompiled.js'),
      to: (__dirname + `/dist/development`)
    }, {
      from: (__dirname + '/node_modules/shaka-player/dist'),
      to: (__dirname + `/dist/development/dist`)
    }])


  ]
};
