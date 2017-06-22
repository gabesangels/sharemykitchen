import express from 'express'

import validateObjectId from '../middlewares/validateObjectId'
import User from '../db/models/user'

import {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_UPDATE,
  USERS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.get(USERS_INDEX, (req, res, next) => {
  User
    .find({})
    .then((users) => {
      res.json(users)
    })
    .catch(next)
})

router.get(USERS_SHOW, validateObjectId, (req, res, next) => {
  const { id } = req.params

  User
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

router.post(USERS_CREATE, (req, res, next) => {
  const user = new User(req.body)

  user
    .save()
    .then((newUser) => {
      res.status(201).json(newUser)
    })
    .catch(next)
})

router.put(USERS_UPDATE, validateObjectId, (req, res, next) => {
  const { id } = req.params

  User
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((user) => {
      if (user) {
        res.json(user)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.delete(USERS_DELETE, validateObjectId, (req, res, next) => {
  const { id } = req.params

  User
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
