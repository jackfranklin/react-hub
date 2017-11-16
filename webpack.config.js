const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')

const partDirectories = fs
  .readdirSync(__dirname)
  .filter(f => f.indexOf('part') > -1)

const parts = Array.from({ length: partDirectories.length }).map(
  (_, index) => `part${index + 1}`
)

const partsEntryPoints = parts.reduce((entries, part) => {
  entries[part] = path.resolve(part, 'index.js')
  return entries
}, {})

const htmlFiles = parts.map(
  part =>
    new HtmlWebpackPlugin({
      title: `ReactHub: ${part}`,
      filename: `${part}/index.html`,
      chunks: ['vendor', part],
      template: './template.html',
    })
)

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'react-router-dom',
      'whatwg-fetch',
      './style.js',
    ],
    ...partsEntryPoints,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devServer: {
    overlay: true,
    stats: 'minimal',
    historyApiFallback: {
      rewrites: [
        { from: /part9\/./, to: '/part9/index.html' },
        { from: /part10\/./, to: '/part10/index.html' },
        { from: /part11\/./, to: '/part11/index.html' },
      ],
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
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
        exclude: /node_modules/,
      },
    ],
  },
}
