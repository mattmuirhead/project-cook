import React from 'react'
import icons from './icons'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: ${props => props.theme.iconSizes[props.size]};
  height: ${props => props.theme.iconSizes[props.size]};
  ${props => props.clickable && 'cursor: pointer;'}
  
  svg {
    fill: ${props => props.theme.text[props.color]};
  }
`


const Icon = ({ name, ...otherProps }) => {
  const icon = icons[name]

  return (
  <IconWrapper {...otherProps}>
    <svg title={icon.title} viewBox={icon.viewBox}>
      {icon.markup()}
    </svg>
  </IconWrapper>
)}

export default Icon
