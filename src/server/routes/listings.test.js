import supertest from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import Listing from '../db/models/listing'

import {
  LISTINGS_INDEX,
  LISTINGS_CREATE,
  listingsShowRoute,
  listingsUpdateRoute,
  listingsDeleteRoute,
} from '../../shared/routes'

const request = supertest.agent(app.listen())

describe('LISTINGS', () => {
  describe(`GET ${LISTINGS_INDEX}`, () => {
    const URI = `/api${LISTINGS_INDEX}`

    test('should return a list', (done) => {
      request
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })

    test('should return the listing that was created', (done) => {
      const listing = new Listing({
        name: 'Kitchen 1',
        host_id: mongoose.Types.ObjectId(),
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      listing.save().then((newListing) => {
        request
          .get(URI)
          .expect(200)
          .then((response) => {
            const listingObject = response.body.find((l) => {
              return l._id === listing.id
            })
            expect(listingObject).toBeTruthy()
            expect(listingObject.name).toBe(listing.name)
            expect(listingObject.host_id).toBe(listing.host_id.toString())
            expect(listingObject.address).toBe(listing.address)
            expect(listingObject.rating).toBe(listing.rating)
            expect(listingObject.pictures.length).toBe(listing.pictures.length)
            expect(listingObject.features.length).toBe(listing.features.length)
            expect(listingObject.rate).toBe(listing.rate)
            expect(listingObject.area).toBe(listing.area)
            return newListing.remove()
          })
          .then(done)
      })
    })
  })

  describe(`GET ${listingsShowRoute()}`, () => {
    test('should show a single listing object', (done) => {
      const listing = new Listing({
        name: 'Kitchen 1',
        host_id: mongoose.Types.ObjectId(),
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      listing.save().then((newListing) => {
        request
          .get(`/api${listingsShowRoute(newListing._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newListing._id.toString())
            return newListing.remove()
          })
          .then(done)
      })
    })

    test('should return 404 if listing is not found', (done) => {
      request
        .get(`/api${listingsShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has an invalid id', (done) => {
      request
        .get(`/api${listingsShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${LISTINGS_CREATE}`, () => {
    test('should return the created listing\'s id', (done) => {
      const listing = new Listing({
        name: 'Kitchen 1',
        host_id: mongoose.Types.ObjectId(),
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      request
        .post(`/api${LISTINGS_CREATE}`)
        .send(listing)
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          return listing.remove()
        })
        .then(done)
    })
  })

  describe(`PUT ${listingsUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const listing = new Listing({
        name: 'Kitchen 1',
        host_id: mongoose.Types.ObjectId(),
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      const currname = 'Super awesome kitch'

      listing.save().then((newListing) => {
        request
          .put(`/api${listingsUpdateRoute(newListing._id)}`)
          .field('name', currname)
          .expect(200)
          .then(() => {
            return newListing.remove()
          })
          .then(done)
      })
    })

    test('should return the updated listing with correct updated fields', (done) => {
      const listing = new Listing({
        name: 'Kitchen 1',
        host_id: mongoose.Types.ObjectId(),
        address: '221B Baker St.',
        rating: 8,
        pictures: ['jpeg', 'jpeg'],
        features: ['over', 'blender'],
        rate: 100,
        area: 'Westminster',
      })

      const currname = 'Super awesome kitch'

      listing.save().then((newListing) => {
        request
          .put(`/api${listingsUpdateRoute(newListing._id)}`)
          .send({ name: currname })
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.name).toBe(currname)
            return newListing.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when listing with id does not exist', (done) => {
      request
        .put(`/api${listingsUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has invalid id', (done) => {
      request
        .put(`/api${listingsUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${listingsDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const listing = new Listing()

      listing.save().then((newListing) => {
        request
        .delete(`/api${listingsDeleteRoute(newListing._id)}`)
        .expect(200)
        .then(() => {
          return newListing.remove()
        })
        .then(done)
      })
    })

    test('should return the deleted listing\'s id upon successful operation', (done) => {
      const listing = new Listing()

      listing.save().then((newListing) => {
        request
          .delete(`/api${listingsDeleteRoute(newListing._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newListing._id.toString())
            return newListing.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when listing with id does not exist', (done) => {
      request
        .put(`/api${listingsDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when listing has invalid id', (done) => {
      request
        .put(`/api${listingsDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
