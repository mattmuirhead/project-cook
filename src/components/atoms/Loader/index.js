import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { transparentize } from 'polished'

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => transparentize(0.2, props.theme.loader.background)};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  @keyframes rotate { 100% { transform: rotate(360deg); }}
  @keyframes bounce {
    0%, 100% { transform: scale(0.0); } 
    50% { transform: scale(1.0); }
  }
`

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  text-align: center;
  animation: rotate 2.0s infinite linear;
`

const Dot1 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: ${props => props.theme.loader.dot};
  background-image: ${props => props.theme.loader.gradient};
  border-radius: 100%;
  animation: bounce 2.0s infinite ease-in-out;
`

const Dot2 = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.loader.dot};
  background-image: ${props => props.theme.loader.gradient};
  border-radius: 100%;
  animation: bounce 2.0s infinite ease-in-out;
  animation-delay: -1.0s;
`


const Loader = () => {
  const isLoading = useSelector(state => state.loading)
  return (
    isLoading ? 
      <LoadingWrapper>
        <Spinner>
          <Dot1 />
          <Dot2 />
        </Spinner>
      </LoadingWrapper> 
    : null
  )
}

export default Loader