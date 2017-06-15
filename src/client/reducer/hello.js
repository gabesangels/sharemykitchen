import { SAY_HELLO } from '../action/hello'

const initialState = {
  message: 'hello from helloReducer',
}

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return { ...state, message: action.payload }
    default:
      return state
  }
}

export default helloReducer
