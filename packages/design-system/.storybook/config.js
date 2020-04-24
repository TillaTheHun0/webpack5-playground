  
import React from 'react'

import { addDecorator, configure } from '@storybook/react'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'

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
