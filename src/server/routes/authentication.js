import express from 'express'
import passport from 'passport'
import passportFacebook from 'passport-facebook'

import User from '../db/models/user'
import authRequired from '../middlewares/authRequired'

import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_CALLBACK_URL,
} from '../../shared/config'

import {
  AUTH_FACEBOOK,
  AUTH_FACEBOOK_CALLBACK,
  AUTH_ME,
  AUTH_LOGOUT,
  HOME_PAGE_ROUTE,
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
      done(null, {
        _id: user._id,
        name: user.name || undefined,
        email: user.email || undefined,
        picture: `//graph.facebook.com/${user.facebook_uid}/picture?width=150&height=150`,
      })
    })
})

const router = express.Router()

router.get(AUTH_FACEBOOK, passport.authenticate('facebook', { authType: 'rerequest', scope: ['email', 'public_profile'] }))

router.get(AUTH_FACEBOOK_CALLBACK, passport.authenticate('facebook', { successRedirect: HOME_PAGE_ROUTE }))

router.get(AUTH_ME, authRequired, (req, res) => {
  res.json(req.user)
})

router.get(AUTH_LOGOUT, (req, res) => {
  const from = req.query.from
  req.logout()
  if (from) {
    res.redirect(from)
    return
  }
  res.redirect(HOME_PAGE_ROUTE)
})

export default router
