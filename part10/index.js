import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

const AppWithRouter = () => (
  <BrowserRouter basename="/part10">
    <div>
      <App />
    </div>
  </BrowserRouter>
)

export default () =>
  render(<AppWithRouter />, document.getElementById('react-root'))
