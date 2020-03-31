import React from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.div`
  font-size: ${props => props.theme.fontSizes.label};
  color: ${props => props.theme.text.label}
`

const Label = ({children}) => (
  <LabelWrapper>{children}</LabelWrapper>
)

export default Label