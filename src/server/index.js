import compression from 'compression'
import express from 'express'

import routing from './routing'
import { WEB_PORT, STATIC_PATH, RAVEN_PATH_SERVER } from '../shared/config'
import { isProd } from '../shared/util'

if (RAVEN_PATH_SERVER) {
  // eslint-disable-next-line global-require
  require('raven').config(RAVEN_PATH_SERVER, { environment: isProd ? 'production' : 'development' }).install()
}

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${WEB_PORT} ${isProd ?
              '(Production)' :
              '(Development).\nKeep "yarn dev:wds" running on a separate terminal'}.`)
})
