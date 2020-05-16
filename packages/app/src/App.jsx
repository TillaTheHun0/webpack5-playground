import React from 'react'

import { Content } from './Content'

const ThemeProvider = React.lazy(() => import('ds/ThemeProvider'))
const Header = React.lazy(() => import('header/Header'))
const Footer = React.lazy(() => import('footer/Footer'))

export const App = () => (
  <React.Suspense fallback='Loading ThemeProvider'>
    <ThemeProvider>
      <React.Suspense fallback='Loading Header from Remote...'>
        <Header />
      </React.Suspense>
      <Content />
      <React.Suspense fallback='Loading Footer from Remote...'>
        <Footer />
      </React.Suspense>
    </ThemeProvider>
  </React.Suspense>
)
