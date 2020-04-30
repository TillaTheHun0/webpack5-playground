
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const merge = require('webpack-merge')

const { webpackConfig } = require('@webpack5-playground/common')

module.exports = webpackConfig(base =>
  merge.smart(base, {
    cache: false,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000
    },
    // Needed in order for exposed modules to be resolved correctly by consumers
    output: {
      publicPath: 'http://localhost:3000/'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app',
        library: { type: 'var', name: 'app' },
        filename: 'remoteEntry.js',
        // Load federated modules from other remote entrypoints (see public/index.html)
        remotes: {
          header: 'header',
          footer: 'footer',
          ds: 'ds'
        },
        shared: ['react', 'react-dom', '@chakra-ui/core', '@emotion/core', '@emotion/styled', 'emotion-theming']
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  })
)
