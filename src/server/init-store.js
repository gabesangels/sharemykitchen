import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import authenticationReducer from '../shared/reducer/authentication'

const initStore = (plainPartialState) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    preloadedState.hello = Object.assign(
      {},
      helloReducer(undefined, {}),
      plainPartialState.hello,
    )
  }

  if (plainPartialState && plainPartialState.authentication) {
    preloadedState.authentication = Object.assign(
      {},
      authenticationReducer(undefined, {}),
      plainPartialState.authentication,
    )
  }

  return createStore(combineReducers({
    hello: helloReducer,
    authentication: authenticationReducer,
  }), preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
