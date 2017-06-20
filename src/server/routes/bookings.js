import express from 'express'

import BookingModel from '../db/models/bookings'

import {
  BOOKINGS_INDEX,
  BOOKINGS_SHOW,
  BOOKINGS_CREATE,
  BOOKINGS_UPDATE,
  BOOKINGS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(BOOKINGS_INDEX).get((req, res) => {
  BookingModel.find({}, (data) => {
    res.json(data)
  },
  )
})
router.route(BOOKINGS_SHOW).get((req, res) => {
  const id = req.params.id
  BookingModel.find({ id: id }, (data) => {
    res.json(data)
  })
})
router.route(BOOKINGS_CREATE).post((req, res) => {
  BookingModel.create(req.body, (data) => {
    res.json(data)
  })
})
router.route(BOOKINGS_UPDATE).put((req, res) => {
  const id = req.params.id
  BookingModel.findById(id, (err, booking) => {
    if (err) {
      res.status(500).send(err)
    } else {
      booking.listing_id = req.body.listing_id || booking.listing_id
      booking.host_id = req.body.host_id || booking.host_id
      booking.guest_id = req.body.guest_id || booking.guest_id
      booking.rate = req.body.rate || booking.rate
      booking.date = req.body.date || booking.date
      booking.paid = req.body.paid || booking.paid
    }
  })
})
router.route(BOOKINGS_DELETE).delete((req, res) => {
  const id = req.params.id
  BookingModel.findByIdAndRemove(id, (data) => {
    res.json(data)
  })
})

export default router
