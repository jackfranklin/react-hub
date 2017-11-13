import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      stargazers_count: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }

  render() {
    return (
      <div>
        <span className="star-count">
          {this.props.repository.stargazers_count}
        </span>
        <a href={`https://github.com/${this.props.repository.name}`}>
          {this.props.repository.name}
        </a>
      </div>
    )
  }
}
