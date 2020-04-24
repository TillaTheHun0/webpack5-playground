
import React from 'react'

const Button = React.lazy(() => import('ds/Button'))

export const Content = () => {
  return (
    <>
      It works!<br />
      <React.Suspense fallback='Loading Button from Storybook'>
        <Button variantColor='primary'>I'm From Storybook!</Button>
      </React.Suspense>
    </>
  )
}
