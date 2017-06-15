import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_FAILURE,
  SAY_HELLO_ASYNC_SUCCESS,
} from '../action/hello'

const initialState = {
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
}

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload }
    case SAY_HELLO_ASYNC_REQUEST:
      return { ...state, messageAsync: 'Loading...' }
    case SAY_HELLO_ASYNC_SUCCESS:
      return { ...state, messageAsync: action.payload }
    case SAY_HELLO_ASYNC_FAILURE:
      return { ...state, messageAsync: 'No message received. Please check your internet connection.' }
    default:
      return state
  }
}

export default helloReducer
