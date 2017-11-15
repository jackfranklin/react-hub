import React from 'react'
import Repository from './repository'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hideRepository, fetchRepositories } from './actions'

class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    hiddenIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  hideRepository = id => {
    this.props.dispatch(hideRepository(id))
  }

  // EXERCISE: dispatch the fetchRepositories() action when the component is mounted
  // and then go do the exercise in ./actions.js to make it all work :)

  // EXERCISE: can you add a button that when clicked, resets hiddenIds entirely
  // and shows every repository again?
  // you'll need to create a new action and hook it all up correctly

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
              repository => this.props.hiddenIds.indexOf(repository.id) === -1
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
