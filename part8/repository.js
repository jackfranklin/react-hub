import React from 'react'
import PropTypes from 'prop-types'

const Repository = props => (
  <div>
    <span className="star-count">{props.repository.stargazers_count}</span>
    <a href={`https://github.com/${props.repository.name}`}>
      {props.repository.name}
    </a>
  </div>
)

Repository.propTypes = {
  repository: PropTypes.shape({
    stargazers_count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}

export default Repository
