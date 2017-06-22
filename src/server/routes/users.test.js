import supertest from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import User from '../db/models/user'

import {
  USERS_INDEX,
  USERS_CREATE,
  usersShowRoute,
  usersUpdateRoute,
  usersDeleteRoute,
} from '../../shared/routes'

const request = supertest.agent(app.listen())

describe('USERS', () => {
  describe(`GET ${USERS_INDEX}`, () => {
    const URI = `/api${USERS_INDEX}`

    test('should return a list', (done) => {
      request
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })

    test('should return the user that was created', (done) => {
      const user = new User({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })

      user.save().then(() => {
        request
          .get(URI)
          .expect(200)
          .then((response) => {
            const userObject = response.body.find((u) => {
              return u._id === user.id
            })
            expect(userObject).toBeTruthy()
            expect(userObject.name).toBe(user.name)
            expect(userObject.guest).toBe(user.guest)
            expect(userObject.host).toBe(user.host)
            return user.remove()
          })
          .then(done)
      })
    })
  })

  describe(`GET ${usersShowRoute()}`, () => {
    test('should show a single user object', (done) => {
      const user = new User({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })

      user.save().then((newUser) => {
        request
          .get(`/api${usersShowRoute(newUser._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newUser._id.toString())
            return user.remove()
          })
          .then(done)
      })
    })

    test('should return 404 if user is not found', (done) => {
      request
        .get(`/api${usersShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has an invalid id', (done) => {
      request
        .get(`/api${usersShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${USERS_CREATE}`, () => {
    test('should return the created user\'s id', (done) => {
      const name = faker.name.findName()

      request
        .post(`/api${USERS_CREATE}`)
        .send({
          name,
          guest: true,
          host: true,
        })
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          return User.remove({ _id: response.body._id })
        })
        .then(done)
    })
  })

  describe(`PUT ${usersUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const prevname = faker.name.findName()
      const currname = faker.name.findName()

      const user = new User({
        name: prevname,
      })

      user.save().then((newUser) => {
        request
          .put(`/api${usersUpdateRoute(newUser._id)}`)
          .send({
            name: currname,
          })
          .expect(200)
          .then(() => {
            return user.remove()
          })
          .then(done)
      })
    })

    test('should return the updated user with correct updated fields', (done) => {
      const prevname = faker.name.findName()
      const currname = faker.name.findName()

      const user = new User({
        name: prevname,
      })

      user.save().then((newUser) => {
        request
          .put(`/api${usersUpdateRoute(newUser._id)}`)
          .send({
            name: currname,
          })
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.name).toBe(currname)
            return user.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when user with id does not exist', (done) => {
      request
        .put(`/api${usersUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has invalid id', (done) => {
      request
        .put(`/api${usersUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${usersDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const user = new User()

      user.save().then((newUser) => {
        request
        .delete(`/api${usersDeleteRoute(newUser._id)}`)
        .expect(200)
        .then(() => {
          return newUser.remove()
        })
        .then(done)
      })
    })

    test('should return the deleted user\'s id upon successful operation', (done) => {
      const user = new User()

      user.save().then((newUser) => {
        request
          .delete(`/api${usersDeleteRoute(newUser._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newUser._id.toString())
            return newUser.remove()
          })
          .then(done)
      })
    })

    test('should return 404 when user with id does not exist', (done) => {
      request
        .put(`/api${usersDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has invalid id', (done) => {
      request
        .put(`/api${usersDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
