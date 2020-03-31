import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import UserProvider from './providers/UserProvider'
import Routes from './Routes'
import theme from './theme'
import store from './state'

const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <UserProvider>
        <AppContainer>
          <Router>
            <Routes />
          </Router>
        </AppContainer>
      </UserProvider>
    </Provider>
  </ThemeProvider>
)

export default App
