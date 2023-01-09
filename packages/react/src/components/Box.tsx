import { type ElementType, type ComponentProps } from 'react'

import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
