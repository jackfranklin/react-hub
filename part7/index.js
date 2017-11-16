import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'
import fetch from 'so-fetch-js'

const getSearchUrl = query => `
  http://github-proxy-api.herokuapp.com/search/repositories?q=${query}+language:javascript+fork:false+stars:>=1000
`

class App extends React.Component {
  state = {
    repositories: [],
    isLoading: true,
    removedIds: [],
    searchQuery: 'react',
  }

  componentDidMount() {
    fetch(getSearchUrl(this.state.searchQuery)).then(result => {
      this.setState(prevState => ({
        isLoading: false,
        repositories: result.data.items,
      }))
    })
  }

  hideRepository = id =>
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))

  updateSearchQuery = event => {
    // EXERCISE: update this.state.searchQuery with the new query
    // (the latest input value is accessed via event.target.value)
  }

  searchGithub = event => {
    // this stops the form submitting and refreshing the browser
    event.preventDefault()

    // EXERCISE:
    // search GitHub based on the value of this.state.searchQuery
    // hint: can you reuse the code in componentDidMount if you create another function
    // that you could call?
  }

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        {this.state.isLoading && <div className="loader">Loading...</div>}
        <form onSubmit={this.searchGithub}>
          <input
            type="text"
            className="search-query"
            placeholder="react"
            value={this.state.searchQuery}
            onChange={this.updateSearchQuery}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
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

export default () => render(<App />, document.getElementById('react-root'))
