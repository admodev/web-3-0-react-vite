var webpack = require('webpack')

module.exports = function (config) {
	config.set({
		browsers: ['Chrome', 'Firefox'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['tests.webpack.js'],
		preprocessors: {
			'tests.webpack.js': ['webpack']
		},
		reporters: ['dots'],
		webpack: {
			module: {
				rules: [
					{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
				]
			},
			watch: true
		},
		webpackServer: {
			noInfo: true
		}
	})
}
