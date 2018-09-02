const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    hot: true,
  },
  devtool: 'source-map',
};
