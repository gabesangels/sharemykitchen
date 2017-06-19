import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import { APP_CONTAINER_SELECTOR, RAVEN_PATH_CLIENT } from '../shared/config'
import { isProd } from '../shared/util'

// eslint-disable-next-line prefer-const
let middlewares = [thunkMiddleware]
if (RAVEN_PATH_CLIENT) {
  /* eslint-disable global-require */
  const Raven = require('raven-js')
  const createRavenMiddleware = require('raven-for-redux')
  Raven.config(RAVEN_PATH_CLIENT, { environment: isProd ? 'production' : 'development' }).install()
  middlewares.unshift(createRavenMiddleware(Raven))
  /* eslint-disable global-require */
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-disable no-underscore-dangle */

const store = createStore(
  combineReducers({ hello: helloReducer }),
  { hello: preloadedState.hello },
  composeEnhancers(applyMiddleware(...middlewares)),
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) => {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppContainer>
          <AppComponent />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
