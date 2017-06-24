import 'babel-polyfill'

import { createAction } from 'redux-actions'
import { LISTINGS_CREATE } from '../../shared/routes'

export const LISTINGS_CREATE_ASYNC_REQUEST = 'LISTINGS_CREATE_ASYNC_REQUEST'
export const LISTINGS_CREATE_ASYNC_FAILURE = 'LISTINGS_CREATE_ASYNC_FAILURE'
export const LISTINGS_CREATE_ASYNC_SUCCESS = 'LISTINGS_CREATE_ASYNC_SUCCESS'

export const listingsCreateAsyncRequest = createAction(
  LISTINGS_CREATE_ASYNC_REQUEST,
)
export const listingsCreateAsyncFailure = createAction(
  LISTINGS_CREATE_ASYNC_FAILURE,
)
export const listingsCreateAsyncSuccess = createAction(
  LISTINGS_CREATE_ASYNC_SUCCESS,
)

export const listingsCreateAsync = (listing) => {
  return (dispatch) => {
    dispatch(listingsCreateAsyncRequest())
    return fetch(`/api${LISTINGS_CREATE}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listing),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        dispatch(listingsCreateAsyncSuccess(data))
        return data
      })
      .catch(() => {
        dispatch(listingsCreateAsyncFailure())
      })
  }
}
