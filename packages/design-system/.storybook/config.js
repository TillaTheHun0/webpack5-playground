  
import React from 'react'

import { addDecorator, configure } from '@storybook/react'
import { CSSReset } from '@chakra-ui/core'

import ThemeProvider from '../src/components/ThemeProvider'

const req = require.context('../src', true, /stories.(jsx|mdx)$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}

addDecorator(story => <AppProvider>{story()}</AppProvider>)

configure(loadStories, module)
