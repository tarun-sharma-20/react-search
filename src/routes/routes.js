import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Search from '../containers/search'

export const Routes = () => (
  <div>
    <Route exact path="/" component={Search}/>
    <Route path="/:tags" component={Search}/>
  </div>
)
