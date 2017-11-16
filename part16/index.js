import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <p>
    This is a testing exercise, so run <code>yarn run part16-test</code> on your
    command line.
  </p>
)

export default () => render(<App />, document.getElementById('react-root'))
