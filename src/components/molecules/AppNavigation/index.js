import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

const NavWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  button {
    margin: 0 15px;
  }
`

const AppNavigation = ({ items }) => {
  const history = useHistory()
  const location = useLocation()

  const handleClick = url => {
    history.push(url)
  }

  return (
    <NavWrapper>
      {items && items.map(item => 
        <Button 
          key={item.iconName}
          onClick={() => handleClick(item.url)} 
          modifier={location.pathname === item.url && 'active'} 
          type="secondary">
          <Icon 
            name={item.iconName} 
            size={item.iconSize} 
            gradient={location.pathname === item.url}/>
        </Button>
      )}
    </NavWrapper>
  )
}

export default AppNavigation
