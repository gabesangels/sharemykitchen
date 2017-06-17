import React from 'react'
import Helmet from 'react-helmet'

import MessageAsync from '../../container/message-async'
import HelloAsyncButton from '../../container/hello-async-button'

const title = 'Hello Page Async'

const HelloAsyncPage = () => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to say hello async.' },
          { property: 'og:title', content: title },
        ]}
      />
      <MessageAsync />
      <HelloAsyncButton />
    </div>
  )
}

export default HelloAsyncPage
