const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		hot: true,
		open: true,
		historyApiFallback: true,
		port: 4200,
	},
};
