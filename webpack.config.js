const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: __dirname+'/config/index.js',
  output: {
	  path: __dirname+'/dist/assets',
    filename: 'bundle-[hash].js'
    // publicPath: 'http://localhost:3000/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    // contentBase: "./dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:__dirname+'/config/index.html',
      filename: 'index.html',
      minify:false,
      inject: 'body',
      title:"react and redux",
    })
  ]
}