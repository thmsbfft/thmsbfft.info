const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    bundle: './site/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
    ]
  }
}
