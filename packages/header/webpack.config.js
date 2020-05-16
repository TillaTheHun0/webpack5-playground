
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
      port: 3001
    },
    // Needed in order for exposed modules to be resolved correctly by consumers
    output: {
      publicPath: 'http://localhost:3001/'
    },
    plugins: [
      new StorybookWebpackFederationPlugin({
          name: 'header',
          remotes: ["ds"],
          // Exposes the Header as consumable module. Effectively, a microfrontend
          files: {
            paths: ['./src/expose/Header.jsx'],
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
