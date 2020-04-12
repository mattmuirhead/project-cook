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

const AppNavigation = () => {
  const history = useHistory()
  const location = useLocation()

  const handleClick = url => {
    history.push(url)
  }

  const items = [
    { iconName: 'recipes', iconSize: 'large', url: '/my-recipes'},
    { iconName: 'add', iconSize: 'xxl', url: '/add-recipe'},
    { iconName: 'search', iconSize: 'large', url: '/search-recipes'},
  ]

  return (
    <NavWrapper>
      {items && items.map(item => 
        <Button 
          onClick={() => handleClick(item.url)} 
          modifier={location.pathname === item.url && 'active'} 
          type="secondary">
          <Icon name={item.iconName} size={item.iconSize}/>
        </Button>
      )}
    </NavWrapper>
  )
}

export default AppNavigation
