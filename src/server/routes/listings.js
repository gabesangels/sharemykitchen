import express from 'express'
import { 
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res) => {})
router.route(LISTINGS_SHOW).get((req, res) => {})
router.route(LISTINGS_CREATE).post((req, res) => {})
router.route(LISTINGS_UPDATE).put((req, res) => {})
router.route(LISTINGS_DELETE).delete((req, res) => {})

export default router
