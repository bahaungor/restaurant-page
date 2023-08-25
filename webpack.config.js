const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map', //It will be easier to track down errors
  devServer: {
		static: './dist',
  },
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true, // This will cleanup output folder (dist) after each build (DANGEROUS!! CAREFUL!!)
	},
  module: {
    rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: "./src/favicon.ico",
        inject: false,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: "src/images", to: "images/"},
        ],
      }),
  ],
};