const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/client.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase: 'dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader', exclude: /node_modules/ }
    ]
  },
  node: {
    fs: 'empty'
  }
}
