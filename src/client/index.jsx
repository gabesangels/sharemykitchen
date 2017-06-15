import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import App from './app'
import helloReducer from './reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

const store = createStore(combineReducers({
  hello: helloReducer,
}),
// eslint-disable-next-line no-underscore-dangle
isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const wrapApp = (AppComponent, reduxStore) => {
  return (
    <Provider store={reduxStore}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </Provider>
  )
}

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
