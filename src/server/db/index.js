import mongoose from 'mongoose'

import { currEnv } from '../../shared/util'
import { MONGO_DEV_URI, MONGO_TEST_URI, MONGO_PROD_URI } from '../../shared/config'

const env = {
  'development': MONGO_DEV_URI,
  'testing': MONGO_TEST_URI,
  'production': MONGO_PROD_URI,
}

mongoose.connect(env[currEnv])

const db = mongoose.connection

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
