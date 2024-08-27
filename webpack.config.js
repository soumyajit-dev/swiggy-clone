const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.js'),
	},
	devtool: 'eval-cheap-module-source-map',
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
				test: /\.css$/i,
				// use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader'],
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Caching',
			path: 'index.html',
			template: path.join(__dirname, 'public', 'index.html'),
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
		new MiniCssExtractPlugin(),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		hot: true,
		historyApiFallback: true,
		port: 4200,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	optimization: {
		usedExports: true,
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				parallel: true,
				extractComments: false,
			}),
		],
		splitChunks: {
			chunks: 'async',
			minSize: 20000,
			minRemainingSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]public[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
					name: 'vender',
					chunks: 'all',
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	performance: {
		hints: false,
		maxAssetSize: 100000,
		maxEntrypointSize: 400000,
	},
};
