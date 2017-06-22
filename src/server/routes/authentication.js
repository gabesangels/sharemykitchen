import express from 'express'
import passport from 'passport'
import passportFacebook from 'passport-facebook'

import User from '../db/models/user'

import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URL,
} from '../../shared/config'

import {
  AUTH_FACEBOOK,
  AUTH_FACEBOOK_CALLBACK,
  HELLO_ASYNC_PAGE_ROUTE,
} from '../../shared/routes'

const FacebookStrategy = passportFacebook.Strategy

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'displayName', 'emails', 'picture'],
}, (accessToken, refreshToken, profile, done) => {
  User
    .findOneAndUpdate(
    { email: profile.emails[0].value },
    {
      facebook_uid: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
    },
    { new: true, upsert: true },
    )
    .then(done.bind(null, null))
    .catch(done)
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User
    .findById(id)
    .then((user) => {
      done(null, user)
    })
})

const router = express.Router()

router.get(AUTH_FACEBOOK, passport.authenticate('facebook', { authType: 'rerequest', scope: ['email', 'public_profile'] }))

router.get(AUTH_FACEBOOK_CALLBACK, passport.authenticate('facebook', { successRedirect: HELLO_ASYNC_PAGE_ROUTE }))

export default router
