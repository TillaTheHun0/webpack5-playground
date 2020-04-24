
import React from 'react'

const Header = React.lazy(() => import('header/Header'))
const Footer = React.lazy(() => import('footer/Footer'))

export const App = () => (
  <>
    <React.Suspense fallback='Loading Header from Remote...'>
      <Header />
    </React.Suspense>
    It works!
    <React.Suspense fallback='Loading Footer from Remote...'>
      <Footer />
    </React.Suspense>
  </>
)
