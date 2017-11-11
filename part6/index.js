import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'
import fetch from 'so-fetch-js'

const SEARCH_URL = `
  http://github-proxy-api.herokuapp.com/search/repositories?q=react+language:javascript+fork:false+stars:>=1000
`

class App extends React.Component {
  state = {
    repositories: [],
    isLoading: true,
    removedIds: [],
  }

  componentDidMount() {
    // exercise: fetch the JSON from SEARCH_URL
    // and setState when you get the result back
    // result.data.items will contain the repositories
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
