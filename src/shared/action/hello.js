import { createAction } from 'redux-actions'
import { helloEndpointRoute } from '../../shared/routes'

export const SAY_HELLO = 'SAY_HELLO'
export const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST'
export const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE'
export const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS'

export const sayHello = createAction(SAY_HELLO)
export const sayHelloAsyncRequest = createAction(SAY_HELLO_ASYNC_REQUEST)
export const sayHelloAsyncFailure = createAction(SAY_HELLO_ASYNC_FAILURE)
export const sayHelloAsyncSuccess = createAction(SAY_HELLO_ASYNC_SUCCESS)

export const sayHelloAsync = (num) => {
  return (dispatch) => {
    dispatch(sayHelloAsyncRequest())
    return fetch(helloEndpointRoute(num), { method: 'GET' })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        if (!data.serverMessage) throw new Error('No message received')
        dispatch(sayHelloAsyncSuccess(data.serverMessage))
      })
      .catch(() => {
        dispatch(sayHelloAsyncFailure())
      })
  }
}
