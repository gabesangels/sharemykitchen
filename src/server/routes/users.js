import express from 'express'
import { 
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_UPDATE,
  USERS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(USERS_INDEX, (req, res) => {})
router.route(USERS_SHOW, (req, res) => {})
router.route(USERS_CREATE, (req, res) => {})
router.route(USERS_UPDATE, (req, res) => {})
router.route(USERS_DELETE, (req, res) => {})

export default router;