import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <div className="content">
      <header>ReactHub!</header>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
