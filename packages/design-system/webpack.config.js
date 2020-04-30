
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const merge = require('webpack-merge')

const { webpackConfig } = require('@webpack5-playground/common')

module.exports = webpackConfig(base =>
  merge.smart(base, {
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
          ThemeProvider: './src/components/ThemeProvider',
          theme: './src/components/theme'
        },
        shared: ['react', 'react-dom', '@chakra-ui/core', '@emotion/core', '@emotion/styled', 'emotion-theming']
      })
    ]
  })
)
