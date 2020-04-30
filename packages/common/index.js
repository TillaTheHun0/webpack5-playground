
const baseWebpackConfig = require('./webpack.config.base')

module.exports = {
  webpackConfig: fn => fn(baseWebpackConfig)
}
