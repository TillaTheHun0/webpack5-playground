
const { StorybookWebpackFederationPlugin } = require('storybook-webpack-federation-plugin')
const merge = require('webpack-merge')

const { webpackConfig } = require('@webpack5-playground/common')

module.exports = webpackConfig(base =>
  merge.smart(base, {
    cache: false,
    output: {
      publicPath: 'http://localhost:6006/'
    },
    plugins: [
      new StorybookWebpackFederationPlugin({
        name: 'ds',
        files: {
          paths: ['./src/components/**/*.{js,jsx}'],
          removePrefix: './src/components/'
        },
        shared: ['react', 'react-dom', '@chakra-ui/core', '@emotion/core', '@emotion/styled', 'emotion-theming']
      })
    ]
  })
)
