const  path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const PackageJSON = require("./package.json")

module.exports = {
  mode:"production",
  entry:path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    // library: 'vue-drag-resize-rotate', // 
    filename: PackageJSON.main,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin()
  ]
};