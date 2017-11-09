import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <div className="content">
      <header>
        ReactHub!
        {/* EXERCISES!
        * 1. Give this `span` some text, such as: "GitHub, for React things"
        * 2. Give the `span` a class of "tagline"
        * 3. Extract a `<Tagline />` React component that renders the span.
      */}
        <span />
      </header>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
