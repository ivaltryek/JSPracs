const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Part of basics and asset mgmt entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    // filename: 'main.js', Ref: Basics of Webpack
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { // Part of asset management
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      { // part of asset management
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
