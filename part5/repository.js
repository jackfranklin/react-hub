import React from 'react'
import PropTypes from 'prop-types'

const Repository = props => (
  <li>
    <span className="star-count">{props.repository.stars}</span>
    <a href={`https://github.com/${props.repository.name}`}>
      {props.repository.name}
    </a>
  </li>
)

/* EXERCISE: add prop types here
 * https://reactjs.org/docs/typechecking-with-proptypes.html
 * hint: you'll probably want to use PropTypes.shape(...)
 */
Repository.propTypes = {
  repository: PropTypes.shape({
    stars: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}

export default Repository
