import express from 'express'

import validateObjectId from '../middlewares/validateObjectId'
import Booking from '../db/models/booking'
import Review from '../db/models/review'

import {
  REVIEWS_INDEX,
  REVIEWS_SHOW,
  REVIEWS_CREATE,
  REVIEWS_UPDATE,
  REVIEWS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.get(REVIEWS_INDEX, (req, res, next) => {
  const { host_id } = req.query
  const query = Object.assign({}, host_id && { host_id })

  Review
    .find(query)
    .then((reviews) => {
      res.json(reviews)
    })
    .catch(next)
})

router.get(REVIEWS_SHOW, validateObjectId, (req, res, next) => {
  const { id } = req.params

  Review
    .findById(id)
    .then((review) => {
      if (review) {
        res.json(review)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.post(REVIEWS_CREATE, (req, res, next) => {
  const review = new Review(req.body)

  Booking
    .findById(review.booking_id)
    .then((booking) => {
      if (booking.paid) {
        review
          .save()
          .then((newReview) => {
            res.status(201).json(newReview)
          })
        return
      }
      res.sendStatus(402)
    })
    .catch(next)
})

router.put(REVIEWS_UPDATE, validateObjectId, (req, res, next) => {
  const { id } = req.params

  Review
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((review) => {
      if (review) {
        res.json(review)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.delete(REVIEWS_DELETE, validateObjectId, (req, res, next) => {
  const { id } = req.params

  Review
    .findById(id)
    .then((review) => {
      if (review) {
        Review
        .remove(id)
        .then((deletedReview) => {
          res.json(deletedReview)
        })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
