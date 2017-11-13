import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchForm extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        query: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }

  state = { searchQuery: '' }

  updateSearchQuery = event => {
    this.setState({ searchQuery: event.target.value })
  }

  componentDidMount() {
    // EXERCISE: can you set this.state.searchQuery based off
    // any query that might exist from the URL
    // (if the user is on /results/foo, this.state.searchQuery should
    // be set to foo
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.history.push(`/results/${this.state.searchQuery}`)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
    )
  }
}
