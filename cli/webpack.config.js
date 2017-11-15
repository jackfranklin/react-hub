const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')

module.exports = port => {
  const partDirectories = fs
    .readdirSync(process.cwd())
    .filter(f => f.indexOf('part') > -1)

  const parts = Array.from({ length: partDirectories.length }).map(
    (_, index) => `part${index + 1}`
  )

  const partsEntryPoints = parts.reduce((entries, part) => {
    entries[part] = [
      `webpack-dev-server/client?http://localhost:${port}`,
      'whatwg-fetch',
      './style.js',
      path.resolve(part, 'index.js'),
    ]
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
  return {
    entry: partsEntryPoints,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
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
}
