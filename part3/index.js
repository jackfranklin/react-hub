import React from 'react'
import { render } from 'react-dom'

const Repository = props => (
  <li>
    <span className="star-count">{props.repository.stars}</span>
    <a href={`https://github.com/${props.repository.name}`}>
      {props.repository.name}
    </a>
  </li>
)

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
        <Repository repository={sampleRepository} />
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
