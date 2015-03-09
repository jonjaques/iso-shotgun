var webpack = require('webpack');

module.exports = {
  entry: "./client/app/index",
  output: {
      path: __dirname + "/client/dist/js",
      filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"],
    alias: {
      superagent: 'superagent/lib/client',
      lib: './lib',
      server: './server',
      components: './client/app/components'
    }
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'typescript-loader?typescriptCompiler=jsx-typescript'
      }
    ]
  },
  externals: {
    react: 'React'
  },
  plugins: [

  ]
}