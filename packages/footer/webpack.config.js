
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { StorybookWebpackFederationPlugin } = require('storybook-webpack-federation-plugin')
const merge = require('webpack-merge')

const { webpackConfig } = require('@webpack5-playground/common')

module.exports = webpackConfig(base =>
  merge.smart(base, {
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
      new StorybookWebpackFederationPlugin({
          name: 'footer',
          remotes: ["ds"],
          // Exposes the Footer as consumable module. Effectively, a microfrontend
          files: {
            paths: ['./src/expose/Footer.jsx'],
            removePrefix: './src/expose/'
          },
        }
      ),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        chunks: ['main']
      })
    ]
  })
)
