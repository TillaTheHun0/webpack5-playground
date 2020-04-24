
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const merge = require('webpack-merge')

const base = require('../../webpack.config.base')

module.exports = merge.smart(base, {
  cache: false,
  output: {
    publicPath: 'http://localhost:6006/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ds',
      library: { type: 'var', name: 'ds' },
      filename: 'remoteEntry.js',
      // Exposes components as consumable modules. Effectively, microfrontends
      exposes: {
        Button: './src/components/Button',
        ButtonGroup: './src/components/ButtonGroup',
        Box: './src/components/Box',
        ThemeProvider: './src/components/ThemeProvider'
      },
      shared: ['react', 'react-dom']
    })
  ]
})
