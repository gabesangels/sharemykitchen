import express from 'express'
import {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_UPDATE,
  USERS_DELETE,
} from '../../shared/routes'
import UserModel from '../db/models/user'

const router = express.Router()

router.route(USERS_INDEX).get((req, res) => {
  UserModel.find({}).then((users) => {
    res.json(users)
  })
})
router.route(USERS_SHOW).get((req, res) => {})
router.route(USERS_CREATE).post((req, res) => {})
router.route(USERS_UPDATE).put((req, res) => {})
router.route(USERS_DELETE).delete((req, res) => {})

export default router
