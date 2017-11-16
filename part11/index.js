import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app'

const AppWithRouter = () => (
  <BrowserRouter basename="/part11">
    <div>
      <App />
    </div>
  </BrowserRouter>
)

 
  render(<AppWithRouter />, document.getElementById('react-root'))
