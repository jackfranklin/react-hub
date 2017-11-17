import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'

const App = () => {
  const repositories = [
    {
      id: 1,
      name: 'jackfranklin/react-remote-data',
      stars: 34,
    },
    {
      id: 2,
      name: 'ReactTraining/react-router',
      stars: 25000,
    },
  ]

  return (
    <div className="content">
      <header>
        <h1>ReactHub!</h1>
        <span className="tagline">GitHub, for React things</span>
      </header>
      <ul className="results">
        {/* EXERCISE: go into repository.js and add prop types */}
        {/* EXERCISE: use the <Repository /> component we created */}
        {repositories.map(currentRepository => (
          <Repository
            key={currentRepository.id}
            repository={currentRepository}
          />
        ))}
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
