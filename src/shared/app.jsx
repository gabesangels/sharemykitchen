/* eslint-disable arrow-body-style */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  LISTINGS_INDEX,
} from './routes'
import Nav from './component/nav'
import HomePage from './component/page/home'
import HelloPage from './component/page/hello'
import HelloAsyncPage from './component/page/hello-async'
import NotFoundPage from './component/page/not-found'

import ListingsPage from './component/page/listings-page'

const App = () => {
  return (
    <div>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <h1>{APP_NAME}</h1>
      <Nav />
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
        <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
        <Route path={LISTINGS_INDEX} render={() => <ListingsPage />} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    </div>
  )
}

export default App
