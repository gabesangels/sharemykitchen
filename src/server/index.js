import compression from 'compression'
import express from 'express'
import bodyParser from 'body-parser'
import './db/'

import usersRoute from './routes/users'
import routing from './routing'
import { WEB_PORT, STATIC_PATH, RAVEN_PATH_SERVER } from '../shared/config'
import { currEnv } from '../shared/util'

if (RAVEN_PATH_SERVER) {
  // eslint-disable-next-line global-require
  require('raven').config(RAVEN_PATH_SERVER, { environment: currEnv }).install()
}

const app = express()

app.use(bodyParser.json())
app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.use('/api', usersRoute)
routing(app)

/* eslint-disable no-console,no-unused-expressions */
currEnv !== 'testing' && app.listen(WEB_PORT, () => {
  console.log(`Server is running on port ${WEB_PORT} (${currEnv}).`)
  currEnv === 'development' && console.log('Keep "yarn dev:wds" running on a separate terminal')
})
/* eslint-disable no-console,no-unused-expressions */

export default app
