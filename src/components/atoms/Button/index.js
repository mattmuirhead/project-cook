import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border: 0;
  background-color: ${props => props.type === 'plain' ? 'transparent' : props.theme.background};
  border-radius: ${props => props.theme.radii.input};
  text-align: center;
  padding: 10px;
  font-size: ${props => props.theme.buttons[props.type].size};
  color: ${props => props.modifier ? props.theme.buttons[props.type][props.modifier] : props.theme.buttons[props.type].color};
  width: 100%;
  cursor: pointer;
  ${props => props.modifier !== 'disabled' && props.type === 'primary' && `background-image: ${props.theme.buttons.primary.gradient};`}
  ${props => props.modifier !== 'disabled' && props.type === 'primary' && '-webkit-background-clip: text;'}
  ${props => props.modifier !== 'disabled' && props.type === 'primary' && '-webkit-text-fill-color: transparent;'}
  ${props => props.modifier === 'disabled' && 'pointer-events: none;'}
  ${props => props.type === 'secondary' && `box-shadow: ${props.theme.shadows.emboss};`}

  &:focus, 
  &:active {
    outline: none;
  }

  svg {
    fill: ${props => props.modifier ? props.theme.buttons[props.type][props.modifier] : props.theme.buttons[props.type].color};
  }
`

const Button = ({ children, ...otherProps }) => (
  <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>
)

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'primary',
}

export default Button