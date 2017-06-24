import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { BOOKINGS_CREATE } from '../../shared/routes'

export const BOOKINGS_CREATE_ASYNC_REQUEST = 'BOOKINGS_CREATE_ASYNC_REQUEST'
export const BOOKINGS_CREATE_ASYNC_FAILURE = 'BOOKINGS_CREATE_ASYNC_FAILURE'
export const BOOKINGS_CREATE_ASYNC_SUCCESS = 'BOOKINGS_CREATE_ASYNC_SUCCESS'

export const bookingsCreateAsyncRequest = createAction(
  BOOKINGS_CREATE_ASYNC_REQUEST,
)
export const bookingsCreateAsyncFailure = createAction(
  BOOKINGS_CREATE_ASYNC_FAILURE,
)
export const bookingsCreateAsyncSuccess = createAction(
  BOOKINGS_CREATE_ASYNC_SUCCESS,
)

export const bookingsCreateAsync = (booking) => {
  return (dispatch) => {
    dispatch(bookingsCreateAsyncRequest())
    return fetch(`/api${BOOKINGS_CREATE}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      dispatch(bookingsCreateAsyncSuccess(data))
    })
    .catch(() => {
      dispatch(bookingsCreateAsyncFailure())
    })
  }
}
