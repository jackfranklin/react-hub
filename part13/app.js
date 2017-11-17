import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  state = {
    decrementByAmount: 5,
  }

  // EXERCISE: make decrement and increment work by dispatching
  // an action to the store
  // remember: a connected component is given this.props.dispatch
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  onDecrementByAmountChange = event => {
    this.setState({ decrementByAmount: parseInt(event.target.value, 10) })
  }

  decrementBy = () =>
    this.props.dispatch({
      type: 'DECREMENT_BY',
      amount: this.state.decrementByAmount,
    })

  render() {
    return (
      <div>
        <div className="counter">
          <span className="count">{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrementBy}>---</button>
        </div>
        <input
          type="number"
          value={this.state.decrementByAmount}
          onChange={this.onDecrementByAmountChange}
        />
      </div>
    )
  }
}

const mapReduxStateToProps = state => ({
  count: state.count,
})

const ConnectedApp = connect(mapReduxStateToProps)(App)

export default ConnectedApp
