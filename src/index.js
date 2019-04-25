import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus } from '@fortawesome/pro-light-svg-icons'

import Routes from './routes'

// Reset CSS
import 'normalize.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#2196f3',
    },
  },
  typography: {
    useNextVariants: true,
  }
})

// Load icon preset
library.add(faHome, faPlus)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app')
)