import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus } from '@fortawesome/pro-light-svg-icons'

import Routes from './routes'

// Reset CSS
import 'normalize.css'

// Load icon preset
library.add(faHome, faPlus)

ReactDOM.render(
  <Routes />,
  document.getElementById('app')
)