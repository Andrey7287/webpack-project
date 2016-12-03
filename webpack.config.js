'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {

	entry: "./frontend/app",

	output: {
		path: __dirname + '/js',
		publicPath: '/js/',
		filename: "bundle.js"
	},

	watch: NODE_ENV == 'development',

	devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : "source-map",

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new webpack.ProvidePlugin({
			$: 'jquery/dist/jquery.min'
		})
	],

	module: {

		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
				plugins: ['transform-runtime']
			}
		}]

	}
};

if (NODE_ENV == 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}
