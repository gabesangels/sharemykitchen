import request from 'supertest'

import app from '../'
import {
  USERS_INDEX,
  USERS_SHOW,
  USERS_CREATE,
  USERS_UPDATE,
  USERS_DELETE,
} from '../../shared/routes'

describe('USERS', () => {
  let server

  beforeEach(() => {
    server = app.listen(8001)
  })

  afterEach(() => {
    server.close()
  })

  describe(USERS_INDEX, () => {
    test('should return a list', (done) => {
      request(server)
        .get(`/api${USERS_INDEX}`)
        .expect(200)
        .then((response) => {
          expect(Array.isArray(response.body)).toBe(true)
          done()
        })
    })
  })
})
