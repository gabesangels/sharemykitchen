import React from 'react'
import { APP_NAME } from '../shared/config'
import Message from './container/message'
import HelloButton from './container/hello-button'

const App = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <Message />
      <HelloButton />
    </div>
  )
}

export default App
