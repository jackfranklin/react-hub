import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { HIDE_REPOSITORY, FETCHED_REPOSITORIES } from './actions'

const startingState = {
  repositories: [],
  hiddenIds: [],
}

const reducer = (state = startingState, action) => {
  switch (action.type) {
    case HIDE_REPOSITORY:
      return {
        ...state,
        hiddenIds: [...state.hiddenIds, action.id],
      }
    case FETCHED_REPOSITORIES:
      // EXERCISE: update the state with the new repositories
      // and probably clear state.hiddenIds too
      return state
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
