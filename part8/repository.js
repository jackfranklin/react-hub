import React from 'react'
import PropTypes from 'prop-types'

class Repository extends React.Component {
  onRepositoryClick = event => {
    event.preventDefault()
    this.props.onRepositoryClick(this.props.repository.id)
  }

  render() {
    return (
      <div>
        <span className="star-count">
          {this.props.repository.stargazers_count}
        </span>
        <a href="#" onClick={this.onRepositoryClick}>
          {this.props.repository.name}
        </a>
      </div>
    )
  }
}

Repository.propTypes = {
  repository: PropTypes.shape({
    stargazers_count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onRepositoryClick: PropTypes.func.isRequired,
}

export default Repository
