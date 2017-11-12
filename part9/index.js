import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './app'

const AppWithRouter = () => (
  <BrowserRouter basename="/part9">
    <div>
      <Route exact path="/" component={App} />
      {/* EXERCISE: create a new component and add a route for the /about page */}
      {/* EXERCISE: can you add a <Link /> on the index page to the about page? */}
    </div>
  </BrowserRouter>
)

render(<AppWithRouter />, document.getElementById('react-root'))
