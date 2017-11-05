const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const partsTotal = 1

const parts = Array.from({ length: partsTotal }).map(
  (_, index) => `part${index + 1}`
)

const partsEntryPoints = parts.reduce((entries, part) => {
  entries[part] = ['whatwg-fetch', './style.js', path.resolve(part, 'index.js')]
  return entries
}, {})

const htmlFiles = parts.map(
  part =>
    new HtmlWebpackPlugin({
      title: `ReactHub: ${part}`,
      filename: `${part}/index.html`,
      chunks: [part],
      template: './template.html',
    })
)

module.exports = {
  entry: partsEntryPoints,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devServer: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './index-template.html',
      chunks: [],
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ]
    .concat(htmlFiles)
    .filter(Boolean),
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
