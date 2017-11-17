import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'
import fetch from 'so-fetch-js'

const SEARCH_URL = `
  http://github-pr-api.herokuapp.com/search/repositories?q=react+language:javascript+fork:false+stars:>=1000
`

class App extends React.Component {
  state = {
    repositories: [],
    isLoading: true,
    isError: false,
    removedIds: [],
  }

  componentDidMount() {
    fetch(SEARCH_URL)
      .then(result => {
        this.setState({
          isLoading: false,
          repositories: result.data.items,
        })
      })
      .catch(() => {
        this.setState({ isLoading: false, isError: true })
      })
  }

  hideRepository = id =>
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        {this.state.isLoading && <div className="loader">Loading...</div>}
        {this.state.isError && <div className="loader">ERROR!...</div>}
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

render(<App />, document.getElementById('react-root'))
