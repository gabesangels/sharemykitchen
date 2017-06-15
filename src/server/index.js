import compression from 'compression'
import express from 'express'
import { WEB_PORT, STATIC_PATH, APP_NAME } from '../shared/config'
import { isProd } from '../shared/util'
import renderApp from './render-app'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('/dist'))
app.use(STATIC_PATH, express.static('/public'))

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME))
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(process.env.NODE_ENV)
  console.log(`Server is running on port ${WEB_PORT} ${isProd ? `(Production)` : `(Development)`}.`)
})
