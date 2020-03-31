import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-bottom: 20px;
`

const Input = styled.input`
  appearance: none;
  width: 100%;
  border-radius: ${props => props.theme.radii.input};
  border: none;
  background-color: ${props => props.theme.input.background};
  box-shadow: ${props => props.theme.shadows.emboss};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: 200;
  padding: 15px;
  transition: all ease-in-out .2s;
  color: ${props => props.theme.text.body};

  &:active,
  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.shadows.deboss};
  }
`

const TextInput = ({ type, placeholder, name, onChange }) => {
  return (
    <InputWrapper>
      <Input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
    </InputWrapper>
  )
}

export default TextInput