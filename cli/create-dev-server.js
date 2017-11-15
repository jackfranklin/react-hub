const host = process.env.HOST || '0.0.0.0'

module.exports = function(webpackConfig, proxy, allowedHost) {
  return {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    // Enable hot reloading server. It will provide /sockjs-node/ endpoint
    // for the WebpackDevServer client so it can learn when the files were
    // updated. The WebpackDevServer client is included as an entry point
    // in the Webpack development configuration. Note that only changes
    // to CSS are currently hot reloaded. JS changes will refresh the browser.
    hot: true,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    // https://github.com/facebookincubator/create-react-app/issues/293
    watchOptions: {
      ignored: /node_modules/,
    },
    host,
    historyApiFallback: {
      rewrites: [
        { from: /part9\/./, to: '/part9/index.html' },
        { from: /part10\/./, to: '/part10/index.html' },
        { from: /part11\/./, to: '/part11/index.html' },
      ],
    },
    public: allowedHost,
    proxy,
    overlay: true,
  }
}
