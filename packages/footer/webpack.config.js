
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const merge = require('webpack-merge')

const base = require('../../webpack.config.base')

module.exports = merge.smart(base, {
  cache: false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3002
  },
  // Needed in order for exposed modules to be resolved correctly by consumers
  output: {
    publicPath: 'http://localhost:3002/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'footer',
      library: { type: 'var', name: 'footer' },
      filename: 'remoteEntry.js',
      // Exposes the Header as consumable module. Effectively, a microfrontend
      exposes: {
        Footer: './src/expose/Footer'
      },
      remotes: {
        ds: 'ds'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main']
    })
  ]
})
