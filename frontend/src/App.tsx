import React from 'react'
import HomePage from './ui/pages/HomePage/HomePage'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store'

const store = setupStore()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </Provider>
  )
}

export default App
