import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border-radius: ${props => props.theme.radii.card};
  background: ${props => props.theme.card.background};
  box-shadow: ${props => props.theme.shadows.emboss};
`

const Card = ({children, ...otherProps}) => (
  <CardWrapper {...otherProps}>{children}</CardWrapper>
)

export default Card