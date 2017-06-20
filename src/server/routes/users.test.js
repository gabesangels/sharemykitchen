import request from 'supertest'
import faker from 'faker'
import mongoose from 'mongoose'

import app from '../'
import {
  USERS_INDEX,
  USERS_CREATE,
  usersShowRoute,
  usersUpdateRoute,
  usersDeleteRoute,
} from '../../shared/routes'
import UserModel from '../db/models/user'

describe('USERS', () => {
  let server

  beforeEach((done) => {
    server = app.listen(8001)
    UserModel.remove({}).then(done)
  })

  afterEach((done) => {
    UserModel.remove({}).then(done)
    server.close()
  })

  describe(`GET ${USERS_INDEX}`, () => {
    const URI = `/api${USERS_INDEX}`

    test('should return a list', (done) => {
      request(server)
        .get(URI)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })

    test('should return a single user', (done) => {
      const user = new UserModel({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })

      user.save().then(() => {
        request(server)
          .get(URI)
          .expect(200)
          .then((response) => {
            expect(response.body.length).toBe(1)
            expect(response.body[0].name).toBe(user.name)
            expect(response.body[0].guest).toBe(user.guest)
            expect(response.body[0].host).toBe(user.host)
            done()
          })
      })
    })
  })

  describe(`GET ${usersShowRoute()}`, () => {
    test('should show a single user object', (done) => {
      const user = new UserModel({
        name: faker.name.findName(),
        guest: true,
        host: true,
      })

      user.save().then((newUser) => {
        request(server)
          .get(`/api${usersShowRoute(newUser._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id.toString()).toBe(newUser._id.toString())
            done()
          })
      })
    })

    test('should return 404 if user is not found', (done) => {
      request(server)
        .get(`/api${usersShowRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has an invalid id', (done) => {
      request(server)
        .get(`/api${usersShowRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`POST ${USERS_CREATE}`, () => {
    test('should return the created user\'s id', (done) => {
      const name = faker.name.findName()

      request(server)
        .post(`/api${USERS_CREATE}`)
        .field('name', name)
        .field('guest', true)
        .field('host', true)
        .expect(201)
        .then((response) => {
          expect(typeof response.body).toBe('object')
          expect(response.body._id).toBeTruthy()
          done()
        })
    })
  })

  describe(`PUT ${usersUpdateRoute()}`, () => {
    test('should return 200 when update is successful', (done) => {
      const prevname = faker.name.findName()
      const currname = faker.name.findName()

      const user = new UserModel({
        name: prevname,
      })

      user.save().then((newUser) => {
        request(server)
          .put(`/api${usersUpdateRoute(newUser._id)}`)
          .field('name', currname)
          .expect(200)
          .then(done)
      })
    })

    test('should return the updated user with correct updated fields', (done) => {
      const prevname = faker.name.findName()
      const currname = faker.name.findName()

      const user = new UserModel({
        name: prevname,
      })

      user.save().then((newUser) => {
        request(server)
          .put(`/api${usersUpdateRoute(newUser._id)}`)
          .field('name', currname)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body.name).toBe(prevname)
            done()
          })
      })
    })

    test('should return 404 when user with id does not exist', (done) => {
      request(server)
        .put(`/api${usersUpdateRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has invalid id', (done) => {
      request(server)
        .put(`/api${usersUpdateRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })

  describe(`DELETE ${usersDeleteRoute()}`, () => {
    test('should return 200 when delete is successful', (done) => {
      const user = new UserModel()

      user.save().then((newUser) => {
        request(server)
        .delete(`/api${usersDeleteRoute(newUser._id)}`)
        .expect(200)
        .then(done)
      })
    })

    test('should return the deleted user\'s id upon successful operation', (done) => {
      const user = new UserModel()

      user.save().then((newUser) => {
        request(server)
          .delete(`/api${usersDeleteRoute(newUser._id)}`)
          .expect(200)
          .then((response) => {
            expect(typeof response.body).toBe('object')
            expect(response.body._id).toBe(newUser._id.toString())
            done()
          })
      })
    })

    test('should return 404 when user with id does not exist', (done) => {
      request(server)
        .put(`/api${usersDeleteRoute(mongoose.Types.ObjectId())}`)
        .expect(404)
        .then(done)
    })

    test('should return 404 when user has invalid id', (done) => {
      request(server)
        .put(`/api${usersDeleteRoute(faker.random.number())}`)
        .expect(404)
        .then(done)
    })
  })
})
