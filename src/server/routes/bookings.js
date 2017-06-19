import express from 'express'
import {
  BOOKINGS_INDEX,
  BOOKINGS_SHOW,
  BOOKINGS_CREATE,
  BOOKINGS_UPDATE,
  BOOKINGS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(BOOKINGS_INDEX).get((req, res) => {})
router.route(BOOKINGS_SHOW).get((req, res) => {})
router.route(BOOKINGS_CREATE).post((req, res) => {})
router.route(BOOKINGS_UPDATE).put((req, res) => {})
router.route(BOOKINGS_DELETE).delete((req, res) => {})

export default router
