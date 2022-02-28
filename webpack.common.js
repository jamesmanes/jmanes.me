const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src', 'index.js')
	},
	plugins: [
		new HtmlWebPackPlugin({
		   template: './src/index.html',
		   filename: './index.html',
		   favicon: './src/img/favicon.png'
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.html$/i
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.jpg$/i,
				use: [
					{
						loader: 'url-loader'
					}
				]
			}
		]
	},
}