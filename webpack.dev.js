const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	watchOptions: {
		ignored: '**/node_modules'
	},
	devServer: {
		open: true,
		hot: true,
		compress: false,
		port: 9000,
		static: './dist'
	},
});