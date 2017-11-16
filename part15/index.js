import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import App from './app'

export default () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-root')
  )
