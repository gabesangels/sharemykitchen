import {
  populateUser,
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloEndpointRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    const partialState = Object.assign(
      {},
      populateUser(req.user),
      homePage(),
    )
    res.send(renderApp(req.url, partialState))
  })

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    const partialState = Object.assign(
      {},
      populateUser(req.user),
      helloPage(),
    )
    res.send(renderApp(req.url, partialState))
  })

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    const partialState = Object.assign(
      {},
      populateUser(req.user),
      helloAsyncPage(),
    )
    res.send(renderApp(req.url, partialState))
  })

  app.get(helloEndpointRoute(), (req, res) => {
    res.json(helloEndpoint(req.params.num))
  })

  app.get('/500', () => {
    throw Error('Internal Server Error')
  })

  app.get('*', (req, res) => {
    const partialState = Object.assign(
      {},
      populateUser(req.user),
    )
    res.status(404).send(renderApp(req.url, partialState))
  })
}
