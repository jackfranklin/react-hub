const makeWebpackConfig = require('./webpack.config')
const webpack = require('webpack')
const chalk = require('chalk')
const WebpackDevServer = require('webpack-dev-server')
const {
  choosePort,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils')
const clearConsole = require('react-dev-utils/clearConsole')
const openBrowser = require('react-dev-utils/openBrowser')
const createCompiler = require('./create-compiler')
const createDevServerConfig = require('./create-dev-server')
const path = require('path')
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080
const HOST = process.env.HOST || '0.0.0.0'

const isInteractive = process.stdout.isTTY

choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      // We have not found a port.
      return
    }
    const webpackConfig = makeWebpackConfig(port)
    const appName = path.basename(path.dirname(process.cwd()))
    const urls = prepareUrls('http', HOST, port)
    // Create a webpack compiler that is configured with custom messages.
    const compiler = createCompiler(webpack, webpackConfig, appName, urls)
    const proxyConfig = {}
    const serverConfig = createDevServerConfig(
      webpackConfig,
      proxyConfig,
      urls.lanUrlForConfig
    )
    const devServer = new WebpackDevServer(compiler, serverConfig)
    // Launch WebpackDevServer.
    devServer.listen(port, HOST, err => {
      if (err) {
        return console.log(err)
      }
      if (isInteractive) {
        clearConsole()
      }
      console.log(chalk.cyan('Starting the development server...\n'))
      console.log(
        chalk.cyan(
          '  (please hold tight; this takes a while the first time!)\n'
        )
      )
      openBrowser(urls.localUrlForBrowser)
    })
    ;['SIGINT', 'SIGTERM'].forEach(sig => {
      process.on(sig, () => {
        devServer.close()
        process.exit()
      })
    })
  })
  .catch(err => {
    if (err && err.message) {
      console.log(err.message)
    }
    process.exit(1)
  })
