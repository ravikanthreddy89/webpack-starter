const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
      path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
      new HtmlWebpackPlugin({
          name : 'Test output',
          filename: 'index.html'
      })
  ]
};
