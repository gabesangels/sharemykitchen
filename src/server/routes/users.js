import express from 'express'
import mongoose from 'mongoose'

import {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_UPDATE,
  USERS_DELETE,
} from '../../shared/routes'
import UserModel from '../db/models/user'

const router = express.Router()

router.route(USERS_INDEX).get((req, res, next) => {
  UserModel
    .find({})
    .then((users) => {
      res.json(users)
    })
    .catch(next)
})

router.route(USERS_SHOW).get((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  UserModel
    .findById(id)
    .then((user) => {
      if (user) {
        res.json(user)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(USERS_CREATE).post((req, res, next) => {
  const user = new UserModel(req.body)

  user
    .save()
    .then((newUser) => {
      res.status(201).json(newUser)
    })
    .catch(next)
})

router.route(USERS_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  UserModel
    .findById(id)
    .then((user) => {
      if (user) {
        Object.assign({}, user, req.body)
        user
          .save()
          .then((updatedUser) => {
            res.json(updatedUser)
          })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(USERS_DELETE).delete((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  UserModel
    .findById(id)
    .then((user) => {
      if (user) {
        user
          .remove()
          .then((deletedUser) => {
            res.json(deletedUser)
          })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
