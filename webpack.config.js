const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const modeConfiguration = (env) => require(`./build-utils/webpack.${env}`);

module.exports = ({ mode } = { mode: 'production' }) => {
	return merge(
		{
			mode,
			entry: {
				index: path.resolve(__dirname, 'src/index.js'),
			},
			output: {
				path: path.resolve(__dirname, 'dist'),
				filename: '[name].[contenthash].js',
				chunkFilename: '[name].[chunkhash].js',
				clean: true,
				assetModuleFilename: '[name][ext]',
			},
			module: {
				rules: [
					{
						test: /\.(?:js|jsx)$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react'],
							},
						},
					},
					{
						test: /\.(png|svg|jpg|jpeg|gif)$/i,
						type: 'asset/resource',
					},
					{
						test: /\.json$/i,
						type: 'asset/resource',
					},
				],
			},
			plugins: [
				new HtmlWebpackPlugin({
					title: 'Caching',
					path: 'index.html',
					template: path.join(__dirname, 'src', 'index.html'),
				}),
				new webpack.ProvidePlugin({
					React: 'react',
				}),
				new webpack.EnvironmentPlugin({
					imagesBasePath: './images/',
				}),
				new CopyPlugin({
					patterns: [{ from: 'public' }],
				}),
			],
			resolve: {
				extensions: ['.js', '.jsx'],
			},
		},
		modeConfiguration(mode)
	);
};
