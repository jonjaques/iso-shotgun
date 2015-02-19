var webpack = require('webpack');

module.exports = {
  entry: "./client/app/index",
  output: {
      path: __dirname + "/client/dist/js",
      filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /angular\.js$/, loader: 'imports?jQuery=jquery!exports?window.angular' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        angular: 'angular',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
  ]
}