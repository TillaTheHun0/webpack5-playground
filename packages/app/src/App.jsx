
import React from 'react'

const Header = React.lazy(() => import('header/Header'))
const Footer = React.lazy(() => import('footer/Footer'))

const Button = React.lazy(() => import('ds/Button'))
const ThemeProvider = React.lazy(() => import('ds/ThemeProvider'))

export const App = () => (
  <React.Suspense fallback='Loading ThemeProvider'>
    <ThemeProvider>
      <React.Suspense fallback='Loading Header from Remote...'>
        <Header />
      </React.Suspense>
      It works!<br />
      <React.Suspense fallback='Loading Button from Storybook'>
        <Button variantColor='green'>I'm From Storybook!</Button>
      </React.Suspense>
      <React.Suspense fallback='Loading Footer from Remote...'>
        <Footer />
      </React.Suspense>
    </ThemeProvider>
  </React.Suspense>
)
