import React from 'react'
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

export default class App extends React.Component {
  state = {
    repositories,
    removedIds: [],
  }

  hideRepository = id =>
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))

  reset = () => {
    this.setState({ removedIds: [] })
  }
  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        {this.state.isLoading && <div className="loader">Loading...</div>}
        <ul className="results">
          {this.state.repositories
            .filter(r => this.state.removedIds.indexOf(r.id) === -1)
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
