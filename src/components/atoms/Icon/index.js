import React from 'react'
import PropTypes from 'prop-types'
import icons from './icons'
import styled from 'styled-components'

const IconWrapper = styled.div`
  width: ${props => props.theme.iconSizes[props.size]};
  height: ${props => props.theme.iconSizes[props.size]};
  ${props => props.clickable && 'cursor: pointer;'}
  
  svg {
    fill: ${props => props.gradient && 'url(#gradient)'} ${props => props.theme.text[props.color]};
  }
`


const Icon = ({ name, ...otherProps }) => {
  const icon = icons[name]

  return (
  <IconWrapper {...otherProps}>
    <svg title={icon.title} viewBox={icon.viewBox}>
      <defs>
        <linearGradient id='gradient' x1='1' y1='1'>
          <stop stopColor='#ff0844'/>
          <stop offset='1' stopColor='#ffb199'/>
        </linearGradient>
      </defs>
      {icon.markup()}
    </svg>
  </IconWrapper>
)}

Icon.propTypes = {
  size: PropTypes.string,
}

Icon.defaultProps = {
  size: 'small',
}

export default Icon
