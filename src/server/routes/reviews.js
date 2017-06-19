import express from 'express'
import {
  REVIEWS_INDEX,
  REVIEWS_SHOW,
  REVIEWS_CREATE,
  REVIEWS_UPDATE,
  REVIEWS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(REVIEWS_INDEX).get((req, res) => {})
router.route(REVIEWS_SHOW).get((req, res) => {})
router.route(REVIEWS_CREATE).post((req, res) => {})
router.route(REVIEWS_UPDATE).put((req, res) => {})
router.route(REVIEWS_DELETE).delete((req, res) => {})

export default router
