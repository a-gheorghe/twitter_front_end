const path = require('path');
const webpack = require('webpack');
const HtmlWebackPlugin = require('html-webpack-plugin');

const scriptInjector = new HtmlWebackPlugin({
  template: path.join(__dirname, 'reactApp/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './reactApp/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [ scriptInjector ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
