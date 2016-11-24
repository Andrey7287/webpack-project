'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
	entry: "./index",
	output: {
		filename: "bundle.js",
		library: "index"
	},
	watch: true,
	devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : "source-map"
}
