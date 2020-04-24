
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin-4')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const merge = require('webpack-merge')

const base = require('../../webpack.config.base')

module.exports = merge.smart(base, {
  cache: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001
  },
  // Needed in order for exposed modules to be resolved correctly by consumers
  output: {
    publicPath: 'http://localhost:3001/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'header',
      library: { type: 'var', name: 'header' },
      filename: 'remoteEntry.js',
      // Exposes the Header as consumable module. Effectively, a microfrontend
      exposes: {
        Header: './src/expose/Header'
      },
      // remotes: {
      //   'design-system': 'design-system'
      // },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main']
    })
  ]
})
