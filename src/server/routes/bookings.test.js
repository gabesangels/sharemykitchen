import supertest from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import Booking from '../db/models/booking'
import Listing from '../db/models/listing'
import User from '../db/models/user'

import {
  BOOKINGS_INDEX,
  BOOKINGS_CREATE,
  bookingsShowRoute,
  bookingsUpdateRoute,
  bookingsDeleteRoute,

} from '../../shared/routes'

const request = supertest.agent(app.listen())

describe('BOOKINGS', () => {
  describe(`GET ${BOOKINGS_INDEX}`, () => {
    const URI = `/api${BOOKINGS_INDEX}`

    test('should return a list', (done) => {
      request
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })

    test('should return the booking that was created', (done) => {
      const user = new User({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })
      const listing = new Listing({
        name: faker.name.findName(),
        adress: faker.address.findAddress,
      })
      Promise.all([user.save(), listing.save()])
        .then(([newUser, newListing]) => {
          const booking = new Booking({
            listing_id: mongoose.Types.ObjectId(),
            guest_id: mongoose.Types.ObjectId(),
          })
          booking.save().then(() => {
            request
              .get(URI)
              .expect(200)
              .then((response) => {
                const bookingObject = response.body.find((b) => {
                  return b._id === booking.id
                })
                expect(bookingObject).toBeTruthy()
                expect(bookingObject.listing_id).toBe(booking.listing_id.toString())
                expect(bookingObject.guest_id).toBe(booking.guest_id.toString())

                return Promise.all([
                  newUser.remove(),
                  newListing.remove(),
                ])
              })
              .then(done)
          })
        })
    })
  })

  describe(`GET ${bookingsShowRoute()}`, () => {
    test('should show a single booking object', (done) => {
      const booking = new Booking({
        listing_id: mongoose.Types.ObjectId(),
        guest_id: mongoose.Types.ObjectId(),
        rate: 2,
      })

      booking.save().then((newBooking) => {
        request
          .get(`/api${bookingsShowRoute(newBooking._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newBooking._id.toString())
            return newBooking.remove()
          })
          .then(done)
      })
    })

    test('should return 404 if booking is not found', (done) => {
      request
        .get(`/api${bookingsShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has an invalid id', (done) => {
      request
        .get(`/api${bookingsShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${BOOKINGS_CREATE}`, () => {
    test('should return the created booking\'s id', (done) => {
      const listingId = mongoose.Types.ObjectId()

      request
        .post(`/api${BOOKINGS_CREATE}`)
        .send({ listing_id: listingId })
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          return Booking.remove({ _id: response.body._id })
        })
        .then(done)
    })
  })

  describe(`PUT ${bookingsUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const currListingId = mongoose.Types.ObjectId()
      const prevListingId = mongoose.Types.ObjectId()

      const booking = new Booking({
        listing_id: prevListingId,
      })

      booking.save().then((newBooking) => {
        request
          .put(`/api${bookingsUpdateRoute(newBooking._id)}`)
          .send({ listing_id: currListingId })
          .expect(200)
          .then(() => {
            return newBooking.remove()
          })
          .then(done)
      })
    })

    test('should return the updated booking with correct updated fields', (done) => {
      const currListingId = mongoose.Types.ObjectId()
      const prevListingId = mongoose.Types.ObjectId()

      const booking = new Booking({
        listing_id: prevListingId,
      })

      booking.save().then((newBooking) => {
        request
          .put(`/api${bookingsUpdateRoute(newBooking._id)}`)
          .send({ listing_id: currListingId })
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.listing_id).toBe(currListingId.toString())
            return newBooking.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when booking with id does not exist', (done) => {
      request
        .put(`/api${bookingsUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has invalid id', (done) => {
      request
        .put(`/api${bookingsUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${bookingsDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const booking = new Booking()

      booking.save().then((newBooking) => {
        request
        .delete(`/api${bookingsDeleteRoute(newBooking._id)}`)
        .expect(200)
        .then(() => {
          return newBooking.remove()
        })
        .then(done)
      })
    })

    test('should return the deleted booking\'s id upon successful operation', (done) => {
      const booking = new Booking()

      booking.save().then((newBooking) => {
        request
          .delete(`/api${bookingsDeleteRoute(newBooking._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newBooking._id.toString())
            return newBooking.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when booking with id does not exist', (done) => {
      request
        .put(`/api${bookingsDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when booking has invalid id', (done) => {
      request
        .put(`/api${bookingsDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
