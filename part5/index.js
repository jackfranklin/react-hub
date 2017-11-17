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
    this.setState(previousState => ({
      removedIds: [...previousState.removedIds, id],
    }))
  }

  repositoryIsVisible = repo => this.state.removedIds.indexOf(repo.id) === -1

  reset = () => this.setState({ removedIds: [] })

  render() {
    const visibleRepos = repositories.filter(this.repositoryIsVisible)

    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        <button onClick={this.reset}>Reset</button>
        <ul className="results">
          {visibleRepos.map(repository => (
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

render(<App />, document.getElementById('react-root'))
