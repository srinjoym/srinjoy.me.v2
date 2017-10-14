const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config  = {
   devtool: 'eval-source-map',
   entry: [
      'react-hot-loader/patch',
      './src/app/client.js'
   ],
   output: {
      path: path.resolve('build'),
      filename: 'bundle.js',
      publicPath: '/'
   },
   resolve: {
      extensions: [".js", ".json", ".css",".scss",".jsx",".svg"]
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options:{
               presets: ['es2015', 'stage-0', 'react']
            }
         },
         {
            test: /\.(css)$/,
            use: [
               "style-loader",
               {
                  loader: "css-loader",
                  options: {
                     modules: true,
                     sourceMap: true,
                     importLoaders: 1,
                     localIdentName: "[name]--[local]--[hash:base64:8]"
                  }
               },
               "postcss-loader"
            ]
         },
         {
            test: /\.(sass|scss)$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader',
            ]
         },
         {
            test: /\.(jpg|png|JPG|PNG|jpeg|JPEG)$/,
            loader: 'file-loader',
            options: {
               name: '[path][name].[hash].[ext]',
            }
         }
      ]
   },
   devServer: {
      contentBase: path.resolve("src/www"),
      publicPath: "http://localhost:8080/", // full URL is necessary for Hot Module Replacement if additional path will be added.
      quiet: false,
      hot: true,
      historyApiFallback: true,
      inline: true
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: '200.html',
         template: './src/www/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.LoaderOptionsPlugin({
         debug: true
      })
   ]
};

module.exports = config;
