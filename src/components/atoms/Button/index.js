import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border: 0;
  background-color: ${props => props.theme.background};
  border-radius: ${props => props.theme.radii.input};
  text-align: center;
  padding: 10px;
  font-size: ${props => props.theme.buttons[props.type].size};
  color: ${props => props.disabled ? props.theme.buttons[props.type].disabledColor : props.theme.buttons[props.type].color};
  width: 100%;
  cursor: pointer;
  ${props => !props.disabled && props.type === 'primary' && `background-image: ${props.theme.buttons.primary.gradient};`}
  ${props => !props.disabled && props.type === 'primary' && '-webkit-background-clip: text;'}
  ${props => !props.disabled && props.type === 'primary' && '-webkit-text-fill-color: transparent;'}
  ${props => props.disabled && 'pointer-events: none;'}

  &:focus, 
  &:active {
    outline: none;
  }
`

const Button = ({ children, ...otherProps }) => (
  <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>
)

export default Button