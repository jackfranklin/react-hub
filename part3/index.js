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
        {/* EXERCISE: pull out the <li> into a <Repository /> component
          * that takes sampleRepository as a prop
          * (don't worry about putting it in another file yet, just define it above)
          */}
        <li>
          <span className="star-count">{sampleRepository.stars}</span>
          <a href={`https://github.com/${sampleRepository.name}`}>
            {sampleRepository.name}
          </a>
        </li>
      </ul>
    </div>
  )
}

  render(<App />, document.getElementById('react-root'))
