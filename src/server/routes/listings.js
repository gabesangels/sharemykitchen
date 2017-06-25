/* eslint-disable spaced-comment,no-param-reassign */

import express from 'express'
import mongoose from 'mongoose'

import Listing from '../db/models/listing'
import authRequired from '../middlewares/authRequired'

import {
  LISTINGS_INDEX,
  LISTINGS_SHOW,
  LISTINGS_CREATE,
  LISTINGS_UPDATE,
  LISTINGS_DELETE,
} from '../../shared/routes'

const router = express.Router()

router.route(LISTINGS_INDEX).get((req, res, next) => {
  const qs = req.query
  const features = Object.assign(
      {},
      qs.oven && qs.oven.length && { 'features.oven': qs.oven },
      qs.stove && qs.stove.length && { 'features.stove': qs.stove },
      qs.mixer && qs.mixer.length && { 'features.mixer': qs.mixer },
      qs.blender && qs.blender.length && { 'features.blender': qs.blender },
      qs.refrigerator && qs.refrigerator.length && { 'features.refrigerator': qs.refrigerator },
    )

  Listing
    .find(features)
    .then((listings) => {
      res.json(listings)
    })
    .catch(next)
})

router.route(LISTINGS_SHOW).get((req, res, next) => {
  //parse the req url to get the listing id
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findById(id)
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.post(LISTINGS_CREATE, authRequired, (req, res, next) => {
  const listing = new Listing(Object.assign({}, req.body, { host_id: req.user._id }))

  listing
    .save()
    .then((newListing) => {
      res.status(201).json(newListing)
    })
    .catch(next)
})

router.route(LISTINGS_UPDATE).put((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    )
    .then((listing) => {
      if (listing) {
        res.json(listing)
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

router.route(LISTINGS_DELETE).delete((req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.sendStatus(404)
    return
  }

  Listing
    .findById(id)
    .then((listing) => {
      if (listing) {
        listing
          .remove()
          .then((deletedListing) => {
            res.json(deletedListing)
          })
        return
      }
      res.sendStatus(404)
    })
    .catch(next)
})

export default router
