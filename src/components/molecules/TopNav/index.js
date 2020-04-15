import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import styled from 'styled-components'

const NavWrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 0;
  right: 0;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`

const NavButton = styled(Button)`
  width: initial;
`

const TopNav = ({ items }) => {
  const history = useHistory()
  const location = useLocation()

  const handleClick = url => {
    history.push(url)
  }

  return (
    <NavWrapper>
      {items && items.map(item => 
        <NavButton 
          key={item.iconName}
          onClick={() => item.onClick ? item.onClick() : handleClick(item.url)} 
          modifier={location.pathname === item.url && 'active'} 
          type="plain">
          <Icon 
            name={item.iconName} 
            size="large"
            gradient={location.pathname === item.url}/>
        </NavButton>
      )}
    </NavWrapper>
  )
}

export default TopNav