import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'

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
  {
    id: 3,
    name: 'facebook/react',
    stars: 80000,
  },
]

class App extends React.Component {
  state = {
    removedIds: [],
  }

  hideRepository = id => {
    // exercise: when an ID is removed, update the state and add it to the list
  }

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        <ul className="results">
          {repositories
            .filter(
              // exercise: filter this such that only repos that have not been removed
              // by the user are shown
              repository => true
            )
            .map(repository => (
              <li key={repository.id}>
                <Repository repository={repository} />
                <button
                  className="removeBtn"
                  onClick={() => this.hideRepository(repository.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default () => render(<App />, document.getElementById('react-root'))
