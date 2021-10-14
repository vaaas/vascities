const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
	mode: 'development',
	entry: [ './src/index.js' ],
	output: {
		filename: 'preload.js',
		path: __dirname,
	},
	module: {
		rules: [
			{ test: /\.vue$/, use: 'vue-loader' },
			{ test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ] }
        ]
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	resolve: {
		fallback: {
			'electron': false,
			'fs': false,
			'os': false,
		},
	},
}
