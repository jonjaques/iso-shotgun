var webpack = require('webpack');

module.exports = {
  entry: "./client/app/index",
  output: {
      path: __dirname + "/client/dist/js",
      filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"],
    alias: {
      superagent: 'superagent/lib/client',
      lib: './lib',
      server: './server',
      components: './client/app/components'
    }
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
    ]
  },
  externals: {
    react: 'React'
  },
  plugins: [

  ]
}