import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Routes } from './routes'

export const Client = () => (
  <Router>
    <Routes />
  </Router>
)
