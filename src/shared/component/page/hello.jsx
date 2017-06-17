import React from 'react'
import Helmet from 'react-helmet'

import Message from '../../container/message'
import HelloButton from '../../container/hello-button'

const title = 'Hello Page'

const HelloPage = () => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'A page to say hello.' },
          { property: 'og:title', content: title },
        ]}
      />
      <Message />
      <HelloButton />
    </div>
  )
}

export default HelloPage
