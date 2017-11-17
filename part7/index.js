import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'
import { makeRequest } from './api'

class App extends React.Component {
  state = {
    repositories: [],
    isLoading: true,
    removedIds: [],
    searchQuery: 'react',
  }

  makeGithubRequest() {
    makeRequest(this.state.searchQuery).then(({ repositories }) => {
      this.setState({
        isLoading: false,
        repositories: repositories,
      })
    })
  }

  componentDidMount() {
    this.makeGithubRequest()
  }

  hideRepository = id =>
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))

  updateSearchQuery = event => {
    this.setState({
      searchQuery: event.target.value,
    })
  }

  searchGithub = event => {
    event.preventDefault()
    this.makeGithubRequest()
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

render(<App />, document.getElementById('react-root'))
