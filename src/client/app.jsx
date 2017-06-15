import React from 'react'
import { APP_NAME } from '../shared/config'
import Message from './container/message'
import HelloButton from './container/hello-button'
import MessageAsync from './container/message-async'
import HelloAsyncButton from './container/hello-async-button'

const App = () => {
  return (
    <div>
      <h1>{APP_NAME}</h1>
      <Message />
      <HelloButton />
      <MessageAsync />
      <HelloAsyncButton />
    </div>
  )
}

export default App
