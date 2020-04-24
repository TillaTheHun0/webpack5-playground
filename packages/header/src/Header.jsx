
import React from 'react'

// We are pulling this from the Storybook!
const Box = React.lazy(() => import('ds/Box'))

export const Header = () => (
  <React.Suspense fallback='Loading the Design System...'>
    <Box bg='tomato' color='white'>Hello Header!</Box>
  </React.Suspense>
)
