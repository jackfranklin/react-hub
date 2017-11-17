import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'DECREMENT_BY':
      return { count: state.count - action.amount }
    default:
      return state
  }
}

const runReduxStore = () => {
  const store = createStore(reducer)

  console.log(store.getState())

  store.dispatch({ type: 'INCREMENT' })

  console.log(store.getState())

  // EXERCISE: make this work
  store.dispatch({ type: 'DECREMENT' })

  console.log(store.getState())

  // EXERCISE: make this work!
  store.dispatch({ type: 'DECREMENT_BY', amount: 5 })
  console.log(store.getState())
}

render(
  <p>Look in the console for this one!</p>,
  document.getElementById('react-root')
)

runReduxStore()
