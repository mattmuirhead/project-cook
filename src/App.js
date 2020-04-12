import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import UserProvider from './providers/UserProvider'
import Routes from './Routes'
import theme from './theme'
import store from './state'
import Loader from './components/atoms/Loader'

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
      <AppContainer>
        <Router>
          <Loader />
          <UserProvider>
            <Routes />
          </UserProvider>
        </Router>
      </AppContainer>
    </Provider>
  </ThemeProvider>
)

export default App
