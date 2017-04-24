import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/search'
import { Client } from './routes/client'

import './client.styl'

ReactDOM.render(
  <Client />,
  document.getElementById('root')
)
