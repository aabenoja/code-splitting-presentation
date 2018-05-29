const { join } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    bad: './bad.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [ new CleanWebpackPlugin(['dist']) ],
  mode: 'production'
}
