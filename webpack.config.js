const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 4200,
	},
};
