export const USERS_INDEX = '/users'
export const USERS_SHOW = '/users/:id'
export const USERS_CREATE = '/users'
export const USERS_UPDATE = '/users/:id'
export const USERS_DELETE = '/users/:id'

export const BOOKINGS_INDEX = '/bookings'
export const BOOKINGS_SHOW = '/bookings/:id'
export const BOOKINGS_CREATE = '/bookings'
export const BOOKINGS_UPDATE = '/bookings/:id'
export const BOOKINGS_DELETE = '/bookings/:id'

export const REVIEWS_INDEX = '/reviews'
export const REVIEWS_SHOW = '/reviews/:id'
export const REVIEWS_CREATE = '/reviews'
export const REVIEWS_UPDATE = '/reviews/:id'
export const REVIEWS_DELETE = '/reviews/:id'

export const LISTINGS_INDEX = '/listings'
export const LISTINGS_SHOW = '/listings/:id'
export const LISTINGS_CREATE = '/listings'
export const LISTINGS_UPDATE = '/listings/:id'
export const LISTINGS_DELETE = '/listings/:id'

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num) => {
  return `/ajax/hello/${num || ':num'}`
}

export const usersShowRoute = (id) => {
  return `/users/${id || ':id'}`
}

export const usersUpdateRoute = (id) => {
  return `/users/${id || ':id'}`
}

export const usersDeleteRoute = (id) => {
  return `/users/${id || ':id'}`
}

export const reviewsShowRoute = (id) => {
  return `/reviews/${id || ':id'}`
}

export const reviewsUpdateRoute = (id) => {
  return `/reviews/${id || ':id'}`
}

export const reviewsDeleteRoute = (id) => {
  return `/reviews/${id || ':id'}`
}

export const bookingsShowRoute = (id) => {
  return `/bookings/${id || ':id'}`
}

export const bookingsUpdateRoute = (id) => {
  return `/bookings/${id || ':id'}`
}

export const bookingsDeleteRoute = (id) => {
  return `/bookings/${id || ':id'}`
}

export const listingsShowRoute = (id) => {
  return `/listings/${id || ':id'}`
}

export const listingsUpdateRoute = (id) => {
  return `/listings/${id || ':id'}`
}

export const listingsDeleteRoute = (id) => {
  return `/listings/${id || ':id'}`
}
