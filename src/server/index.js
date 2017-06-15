import compression from 'compression'
import express from 'express'

import { WEB_PORT, STATIC_PATH, APP_NAME } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

import { helloEndpointRoute } from '../shared/routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME))
})

app.get(helloEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server: ${req.params.num}` })
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${WEB_PORT} ${isProd ?
              '(Production)' :
              '(Development).\nKeep "yarn dev:wds" running on a separate terminal'}.`)
})
