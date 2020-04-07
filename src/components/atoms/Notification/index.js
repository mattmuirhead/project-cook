import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const NotificationWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 40px 10px 15px;
  border-radius: ${props => props.theme.radii.input};
  background-color: ${props => props.theme.notifications[props.type].background};
  color: ${props => props.theme.notifications[props.type].color};
  cursor: pointer;
  animation: load-in .5s ease-in-out 1;

  @keyframes load-in {
    0% { opacity: 0%; transform: translateX(-50%) translateY(-10px); }
    100% { opacity: 100%; transform: translateX(-50%) translateY(0); }
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`

const Notification = ({ children, ...otherProps }) => (
  <NotificationWrapper {...otherProps}>
    <IconWrapper>
      <Icon name="close" size="small" color="invertBody" />
    </IconWrapper>
    {children}
  </NotificationWrapper>
)

export default Notification
