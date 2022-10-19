const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	output: {
		publicPath: '/',
		filename: 'bundle.js',
		chunkFilename: 'bundle.[name].js',
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				include: /(src)/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
