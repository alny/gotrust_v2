var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'

  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'

  },
  devtool: 'source-map',
  plugins: 'production' === 'production' ? [
      new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: true
        }
      }),
      new webpack.optimize.DedupePlugin(), //dedupe similar code
      new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ] : [],
  module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js?$/,
          exclude: /(node_modules)/,
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
  }
}
