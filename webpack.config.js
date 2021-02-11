const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	context: path.resolve(__dirname),
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[local]___[hash:base64:5]',
							},
						},
					},
					'sass-loader',
				],
				include: /\.module\.scss$/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] },
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.ttf$/,
				type: 'asset/resource',
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		publicPath: 'http://localhost:5000/dist/',
		port: 5000,
		hot: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
		}),
	],
}
