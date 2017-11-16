import React from 'react'
import { render } from 'react-dom'

const App = () => {
  const sampleRepository = {
    id: 1,
    name: 'jackfranklin/react-remote-data',
    stars: 34,
  }

  return (
    <div className="content">
      <header>
        <h1>ReactHub!</h1>
        <span className="tagline">GitHub, for React things</span>
      </header>
      <ul className="results">
        <li>
          <span className="star-count">
            {/* EXERCISE: swap out this 0 for the actual star count */}
            0
          </span>
          {/* EXERCISE: add an anchor here that links to the repository on GitHub
            * you'll need to prepend https://github.com/ to the repository name
            */}
        </li>
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
