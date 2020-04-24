
import React from 'react'

import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Box from '../Box'
import Button from '../Button'
import ButtonGroup from '.'

const stories = storiesOf('Button Group', module)
stories.addDecorator(withKnobs)
stories.addDecorator(story => {
  return (
    <Box maxWidth='lg' mx='auto' mt={6} p={6}>
      {story()}
    </Box>
  )
})

stories.add('Default', () => (
  <ButtonGroup>
    <Button variant='outline'>Button 1</Button>
    <Button color='blue'>Button 2</Button>
    <Button variant='outline'>Button 3</Button>
  </ButtonGroup>
))
