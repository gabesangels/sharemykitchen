import express from 'express'
import session from 'express-session'

import app from '../'

const authApp = express(session())

authApp.all('*', (req, res, next) => {
  req.user = {}
  next()
})

authApp.use(app)

export default authApp
