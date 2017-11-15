import React from 'react'
import Repository from './repository'
import { connect } from 'react-redux'

class App extends React.Component {
  // EXERCISE: add propTypes to this component

  hideRepository = id => {
    // EXERCISE:
    // when the repository is hidden, you need to dispatch an action to the store
    // to update the list of hidden IDs
  }

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        <ul className="results">
          {this.props.repositories
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
const ConnectedApp = connect(state => ({
  repositories: state.repositories,
  hiddenIds: state.hiddenIds,
}))(App)

export default ConnectedApp
