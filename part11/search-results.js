import React, { Component } from 'react'
import Repository from './repository'
import fetch from 'so-fetch-js'
import PropTypes from 'prop-types'
const getSearchUrl = query => `
  http://github-proxy-api.herokuapp.com/search/repositories?q=${query}+language:javascript+fork:false+stars:>=1000
`

export default class SearchResults extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  }
  state = {
    isLoading: false,
    repositories: [],
  }

  fetchRepositories(query) {
    this.setState({ isLoading: true, repositories: [] })

    fetch(getSearchUrl(query)).then(result => {
      this.setState(prevState => ({
        isLoading: false,
        repositories: result.data.items,
      }))
    })
  }

  componentDidMount() {
    this.fetchRepositories(this.props.query)
  }

  componentWillReceiveProps(nextProps) {
    // EXERCISE: can you fix the bug where the URL changes but the list of results
    // stays the same?
    // hint: you should use this function to do so!
    // and make sure you check the props are actually different
    // to avoid doing extra HTTP requests we don't need
  }

  render() {
    return (
      <ul className="results">
        {this.state.isLoading && <span>Loading...</span>}
        {this.state.repositories.map(repository => (
          <li key={repository.id}>
            <Repository repository={repository} />
          </li>
        ))}
      </ul>
    )
  }
}
