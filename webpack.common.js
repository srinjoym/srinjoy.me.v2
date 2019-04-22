const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    './src/app/client.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json', '.jsx', '.svg'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: { presets: ['es2015', 'stage-0', 'react'] }
      }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      },
      {
        test: /\.(jpg|png|JPG|PNG|jpeg|JPEG)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.md$/,
        loaders: [
          '@mapbox/jsxtreme-markdown-loader'
        ]
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "theme/_config.scss";',
    includePaths: [path.resolve(__dirname, './src/app')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/www/index.html'
    }),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
